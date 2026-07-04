import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";
import { ModalPicker } from "../../components/ModalPicker";
import { ListItem } from "../../components/ListItem";
import { StackPramsList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors, radius, spacing } from "../../styles/theme";

type RouteDetailParams = {
  Order: {
    number: number | string;
    order_id: string;
  };
};

export type CategoryProps = {
  id: string;
  name: string;
  description: string;
};

export type ProductProps = {
  id: string;
  name: string;
  description: string;
  banner: string;
};

export type ItemProps = {
  id: string;
  name: string;
  product_id: string;
  amount: string | number;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [category, setCategory] = useState<CategoryProps[]>([]);
  const [categorySelect, setCategorySelect] = useState<CategoryProps>();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);

  const [product, setProduct] = useState<ProductProps[]>([]);
  const [productSelect, setProductSelect] = useState<ProductProps>();
  const [modalProductVisible, setModalProductVisible] = useState(false);

  const [amount, setAmount] = useState("1");
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadInfo() {
      try {
        const response = await api.get("/category");
        setCategory(response.data);
        setCategorySelect(response.data[0]);
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    }
    loadInfo();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      if (!categorySelect) return;
      try {
        const response = await api.get("/category/product", {
          params: {
            category_id: categorySelect.id,
          },
        });
        setProduct(response.data);
        setProductSelect(response.data[0]);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }
    loadProducts();
  }, [categorySelect]);

 
  async function handleCloseOrder() {
    try {
      const orderId = route.params?.order_id;
      if (!orderId) {
        return;
      }

      await api.delete("/order/delete", {
        params: { order_id: orderId },
      });

      navigation.goBack();
    } catch (err: any) {
      console.error("Erro ao fechar pedido:", err.response?.data || err.message);
    }
  }

 
  function handleChangeCategory(item: CategoryProps) {
    setCategorySelect(item);
    setModalProductVisible(true);
  }

  
  function handleChangeProduct(item: ProductProps) {
    setProductSelect(item);
  }

 
  async function handleAdd() {
    if (!productSelect) {
      console.warn("⚠️ Nenhum produto selecionado");
      return;
    }

    try {
      const response = await api.post("/order/add", {
        order_id: route.params?.order_id,
        product_id: productSelect.id,
        amount: Number(amount),
      });

      const data: ItemProps = {
        id: response.data.id,
        product_id: productSelect.id,
        name: productSelect.name,
        amount,
      };

      setItems((oldArray) => [...oldArray, data]);
      setAmount("1");
    } catch (err) {
      console.error("Erro ao adicionar item:", err);
    }
  }

  async function handleDeleteItem(item_id: string) {
    try {
      await api.delete("/item/remove", {
        params: { item_id },
      });

      const updatedItems = items.filter((item) => item.id !== item_id);
      setItems(updatedItems);
    } catch (err) {
      console.error("Erro ao remover item:", err);
    }
  }
 
  function handleFinishOrder() {
    navigation.navigate("FinishOrder", {
      number: route.params.number,
      order_id: route.params.order_id,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tableBadge}>
          <Feather name="hash" size={16} color={colors.primary} />
          <Text style={styles.title}>Mesa {route.params.number}</Text>
        </View>

        {items.length === 0 && (
          <TouchableOpacity onPress={handleCloseOrder} style={styles.iconButton}>
            <Feather name="trash-2" size={22} color={colors.danger} />
          </TouchableOpacity>
        )}
      </View>

      {category.length > 0 && (
        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalCategoryVisible(true)}
          activeOpacity={0.7}
        >
          <Text style={styles.inputText}>{categorySelect?.name}</Text>
          <Feather name="chevron-down" size={20} color={colors.textMuted} />
        </TouchableOpacity>
      )}

      {product.length > 0 && (
        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalProductVisible(true)}
          activeOpacity={0.7}
        >
          <Text style={styles.inputText}>{productSelect?.name}</Text>
          <Feather name="chevron-down" size={20} color={colors.textMuted} />
        </TouchableOpacity>
      )}

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={styles.qtdInput}
          placeholderTextColor={colors.placeholder}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd} activeOpacity={0.8}>
          <Feather name="plus" size={22} color={colors.onPrimary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { opacity: items.length === 0 ? 0.4 : 1 }]}
          disabled={items.length === 0}
          onPress={handleFinishOrder}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Avançar</Text>
          <Feather name="arrow-right" size={18} color={colors.onPrimary} />
        </TouchableOpacity>
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Feather name="shopping-bag" size={32} color={colors.textMuted} />
          <Text style={styles.emptyStateText}>Nenhum item adicionado ainda</Text>
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, marginTop: spacing.lg }}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem data={item} deleteItem={handleDeleteItem} />
          )}
        />
      )}

      <Modal
        transparent={true}
        visible={modalCategoryVisible}
        animationType="slide"
      >
        <ModalPicker
          handleCloseModal={() => setModalCategoryVisible(false)}
          options={category}
          selectedItem={handleChangeCategory}
        />
      </Modal>

      <Modal
        transparent={true}
        visible={modalProductVisible}
        animationType="slide"
      >
        <ModalPicker
          handleCloseModal={() => setModalProductVisible(false)}
          options={product}
          selectedItem={handleChangeProduct}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: "5%",
    paddingEnd: "4%",
    paddingStart: "4%",
  },
  header: {
    flexDirection: "row",
    marginBottom: spacing.md,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  tableBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: colors.text,
    fontWeight: "bold",
    marginLeft: spacing.xs,
  },
  iconButton: {
    padding: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    width: "100%",
    height: 50,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputText: {
    color: colors.text,
    fontSize: 16,
  },
  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.xs,
  },
  qtdText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  qtdInput: {
    backgroundColor: colors.surface,
    width: "60%",
    height: 50,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
    color: colors.text,
    fontSize: 18,
    textAlign: "center",
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: spacing.xs,
  },
  buttonAdd: {
    width: "20%",
    backgroundColor: colors.secondary,
    borderRadius: radius.sm,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: spacing.xs,
  },
  button: {
    backgroundColor: colors.primary,
    height: 44,
    width: "75%",
    borderRadius: radius.sm,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.lg,
  },
  emptyStateText: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: spacing.sm,
  },
});

<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" v-bind:src="carInfo.imagePath"></v-img>
    <v-card-title>{{ carInfo.address }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0"></v-row>
      <div class="my-4 text-subtitle-1">Brand: {{ carInfo.brand }}</div>
      <div class="my-4 text-subtitle-1">
        Rent for day: {{ carInfo.rentAmountDay }}
      </div>
      <div>{{ carInfo.description }}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <CarCompleteComponent :carInfo="carInfo" />
      <v-btn text>Remove</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CarCompleteComponent from "../../mycars/pages/carcomplete.component.vue";

export default {
  name: "my-fav-car.component",
  components: {
    CarCompleteComponent,
  },
  props: ["carInfo"],
};
</script>

<style scoped></style>

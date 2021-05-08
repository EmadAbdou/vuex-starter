<template>
  <div>
    <loader v-if="isLoading"></loader>
    <user-card v-else-if="user" :user="user" full-details></user-card>
  </div>
</template>
  
<script>
import UserCard from "@/components/user-card.vue";
import Loader from "@/components/loader";

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('Users');

export default {
  name: "User",
  components: {
    UserCard,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      user: null,
    };
  },
  computed: {
    ...mapState['usersDetails']
  },
  methods: {
    ...mapActions(['getUserAction'])
  },
  mounted() {
    console.log(this.$route.params.id)
    this.isLoading = true;
    // getUser(this.$route.params.id)
    this.getUserAction(this.$route.params.id)
      .then((user) => {
        this.user = user;
        console.log(this.user.firstName)
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
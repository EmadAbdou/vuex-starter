<template>
  <div>
    <loader v-if="loading == LOAD_PAGE"></loader>
    <template v-else>
      <user-card v-for="user in users" :key="user.id" :user="user"></user-card>
      <add-user-card
        :users-length="users.length"
        @submit="submitUser"
        :is-loading="loading == ADDING_USER"
      ></add-user-card>
    </template>
  </div>
</template>
  
<script>
import UserCard from "./user-card";
import AddUserCard from "./add-user-card";
import Loader from "./loader";
import { LOAD_PAGE, ADDING_USER } from "@/utilites/loading-const";
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('Users');


export default {
  name: "users-list",
  components: {
    UserCard,
    AddUserCard,
    Loader,
  },
  data() {
    return {
      loading: false,
      LOAD_PAGE,
      ADDING_USER,
      // users: [],
    };
  },
  computed: {
    // ...mapState(['users'])
    ...mapState({
      users: state => state.users
    })
    // users() {
    //   return this.$store.state.Users.users
    // }
  },
  mounted() {
    this.loading = LOAD_PAGE;
    // this.$store.dispatch('getUsersAction')
    this.getUsersAction()
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    ...mapActions(['addUserAction', 'getUsersAction']),
    submitUser(user) {
      this.loading = ADDING_USER;
      //  this.$store.dispatch('addUserAction', user)
       this.addUserAction(user)
         .finally(() => {
           this.loading = false;
           console.log(this.users)
         });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
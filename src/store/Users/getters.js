export default {
    selectedUsername(state) {
        const { firstName, lastName } = state.selectedUser
        return firstName + lastName;
    }
}
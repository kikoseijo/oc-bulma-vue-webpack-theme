<script>
export default {
  toast: function () {
    this.$toast.open('Something happened')
  },
  success: function () {
    this.$toast.open({
      message: 'Something happened correctly!',
      type: 'is-success'
    })
  },
  danger: function () {
    this.$toast.open({
      duration: 5000,
      message: `Something's not good, also I'm on bottom`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  },
  snackbar: function () {
    this.$snackbar.open(`Default, positioned bottom-right with a green 'OK' button`)
  },
  snackWarning: function () {
    this.$snackbar.open({
      message: 'Yellow button and positioned top-left',
      type: 'is-warning',
      position: 'is-top-left',
      actionText: 'Retry',
      onAction: () => {
        this.$toast.open('Action pressed')
      }
    })
  },
  snackDanger: function () {
    this.$snackbar.open({
      duration: 5000,
      message: 'Snackbar with red action, positioned on bottom-left and a callback',
      type: 'is-danger',
      position: 'is-bottom-left',
      actionText: 'Undo',
      onAction: () => {
        this.$toast.open('Action pressed')
      }
    })
  },
  openLoading: function () {
    const vm = this
    vm.isLoading = true
    setTimeout(() => {
      vm.isLoading = false
    }, 10 * 400)
  },
  openProgrammaticallyLoading: function () {
    const loadingComponent = this.$loading.open()
    setTimeout(() => {
      loadingComponent.close()
    }, 3 * 1000)
  }
}
</script>

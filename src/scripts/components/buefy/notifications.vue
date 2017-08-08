<template>
  <div class="ks-notifiactions container">
      <h1 class="title">Toast</h1>
      <h2 class="subtitle">Toasts are simple text messages to inform the user</h2>
      <button class="button is-medium" @click="toast">
          Toast (default)
      </button>
      <button class="button is-medium is-success" @click="success">
          Toast (custom)
      </button>
      <button class="button is-medium is-danger" @click="danger">
          Toast (custom)
      </button>
      <hr>
      <h1 class="title">Snackbar</h1>
      <h2 class="subtitle">When a Dialog seems a bit overkill for the task, Snackbars are good candidates</h2>
      <div class="block">
          <button class="button is-medium" @click="snackbar">
              Snackbar (default)
          </button>

          <button class="button is-medium is-warning" @click="snackWarning">
              Snackbar (custom)
          </button>

          <button class="button is-medium is-danger" @click="snackDanger">
              Snackbar (custom)
          </button>
      </div>
      <hr>
      <h1 class="title">Loading</h1>
      <h2 class="subtitle">A simple loading overlay</h2>
      <div class="content">
          <p>The Loading will be closed after about 10 seconds or by pressing enter or clicking outside</p>
          <button class="button is-primary is-medium" @click="openLoading">Show Loading</button>
      </div>
      <b-loading :active.sync="isLoading" :canCancel="true"></b-loading>
      <h2 class="title is-spaced">Programmatically opening Loading Overlay</h2>
      <div class="content">
          <p>When you want to close the Loading, call the 'close' method from the component</p>
          <button class="button is-primary is-medium" @click="openProgrammaticallyLoading">Show Loading</button>
      </div>
      <hr>
      <h1 class="title">Message.</h1>
      <h2 class="subtitle">Colored message blocks, to draw attention of your user</h2>
      <button class="button block" @click="isMsgActive = !isMsgActive">Toggle</button>
      <b-message title="Default" :active.sync="isMsgActive">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
      </b-message>
      <hr>
      <h1 class="title">Notifications</h1>
      <h2 class="subtitle">Bold notification blocks, to alert your users of something</h2>
      <button class="button block" @click="isNotifActive = true">Show first</button>
      <div class="columns">
        <div class="column">
          <b-notification :active.sync="isNotifActive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>

          <b-notification type="is-success">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>

          <b-notification type="is-danger">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>

          <b-notification type="is-info" has-icon>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>
        </div>
        <div class="column">
          <b-notification type="is-success" has-icon>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>

          <b-notification type="is-warning" has-icon>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>

          <b-notification type="is-danger" has-icon>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-notification>
        </div>
      </div>


    </div>
</template>

<script>
export default {
  data () {
    return {
      isMsgActive: true,
      isNotifActive: true,
      isLoading: false,
      props: [
        {
          name: '<code>type</code>',
          description: 'Type (color) of the icon, optional',
          type: 'String',
          values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                            <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                            <code>is-warning</code>, <code>is-danger</code>,
                            and any other colors you've set in the <code>$colors</code> list on Sass`,
          default: '—'
        },
        {
          name: '<code>pack</code>',
          description: 'Icon pack to use',
          type: 'String',
          values: '<code>mdi</code>, <code>fa</code>',
          default: '<code>mdi</code>'
        },
        {
          name: '<code>icon</code>',
          description: 'Icon name',
          type: 'String',
          values: '—',
          default: '—'
        },
        {
          name: '<code>size</code>',
          description: 'Icon size, optional',
          type: 'String',
          values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
          default: '—'
        }
      ],
      template1: `
                <div class="block">
                    <b-icon icon="person"></b-icon>
                    <b-icon icon="home"></b-icon>
                    <b-icon icon="dashboard"></b-icon>
                </div>

                <div class="block">
                    <b-icon
                        icon="person"
                        size="is-medium">
                    </b-icon>
                    <b-icon
                        icon="home"
                        size="is-medium">
                    </b-icon>
                    <b-icon
                        icon="dashboard"
                        size="is-medium">
                    </b-icon>
                </div>

                <div class="block">
                    <b-icon
                        icon="person"
                        size="is-large"
                        type="is-success">
                    </b-icon>
                    <b-icon
                        icon="home"
                        size="is-large"
                        type="is-info">
                    </b-icon>
                    <b-icon
                        icon="dashboard"
                        size="is-large"
                        type="is-primary">
                    </b-icon>
                </div>

                <button class="button is-dark">
                    <b-icon icon="done"></b-icon>
                    <span>Finish</span>
                </button>

                <button class="button is-warning">
                    <b-icon icon="done"></b-icon>
                    <span>Finish</span>
                </button>`,
      template2: `
                <div class="block">
                    <b-icon
                        pack="fa"
                        icon="user">
                    </b-icon>
                    <b-icon
                        pack="fa"
                        icon="home">
                    </b-icon>
                    <b-icon
                        pack="fa"
                        icon="dashboard">
                    </b-icon>
                </div>

                <div class="block">
                    <b-icon
                        pack="fa"
                        icon="user"
                        size="is-medium">
                    </b-icon>
                    <b-icon
                        pack="fa"
                        icon="home"
                        size="is-medium">
                    </b-icon>
                    <b-icon
                        pack="fa"
                        icon="dashboard"
                        size="is-medium">
                    </b-icon>
                </div>

                <div class="block">
                    <b-icon
                        pack="fa"
                        icon="user"
                        size="is-large"
                        type="is-success">
                    </b-icon>
                    <b-icon
                        pack="fa"
                        icon="home"
                        size="is-large"
                        type="is-info">
                    </b-icon>
                    <b-icon
                        pack="fa"
                        icon="dashboard"
                        size="is-large"
                        type="is-primary">
                    </b-icon>
                </div>

                <button class="button is-dark">
                    <b-icon pack="fa" icon="check"></b-icon>
                    <span>Finish</span>
                </button>

                <button class="button is-warning">
                    <b-icon pack="fa" icon="check"></b-icon>
                    <span>Finish</span>
                </button>`
    }
  },
  methods: {
    toast () {
      this.$toast.open('Something happened')
    },
    success () {
      this.$toast.open({
        message: 'Something happened correctly!',
        type: 'is-success'
      })
    },
    danger () {
      this.$toast.open({
        duration: 5000,
        message: `Something's not good, also I'm on bottom`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    },
    snackbar () {
      this.$snackbar.open(`Default, positioned bottom-right with a green 'OK' button`)
    },
    snackWarning () {
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
    snackDanger () {
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
    openLoading () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 10 * 400)
    },
    openProgrammaticallyLoading () {
      const loadingComponent = this.$loading.open()
      setTimeout(() => {
        loadingComponent.close()
      }, 3 * 1000)
    }
  }
}
</script>

export default {
    data() {
        return {
            smooth: null
        }
    },
    watch: {
        $route() {
            // this.smooth.destroy()
            // console.log('page changed')
        }
    },
    mounted() {
        this.smooth = new this.$locomotive({
            el: document.getElementById('app'),
            smooth: true,
            smartphone: {
                smooth: true
            }
          })
    },
    destroyed() {
        this.smooth.destroy()
        // this.smooth = null
        console.log('component destroyed')
    }
}
const getTitle = (vm) => {
    const { title } = vm.$options

    console.log({ title })

    if (title) {
        return typeof title === 'function' ? title.call(vm) : title
    }
    
    
}

export default {
    created() {
        const title = getTitle(this)
        if (title) document.title = `Tyler Mitchell — ${title}` || title
        
    }
}
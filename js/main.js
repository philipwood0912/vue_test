import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    //new vue instance
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Philip", role: "Dev" },
                { name: "JOE", role: "Prof"},
                { name: "Justin", role: "Head"}
            ]
        },

        methods: {
            logClicked() {
                console.log("click");
            }
        }
    }).$mount("#app");

    let vm_test = new Vue({

        el: "#test",

        data: {
            message: "YO GUY"
        }
    })
})();
const { createApp } = Vue;

createApp({
  data() {
    return {
      albums: [],
    };
  },
  created(){
    axios.get("http://localhost:8888/php-dischi-json/api.php")
    .then((results) => {
      this.albums = results.data;
    });
  }
}).mount('#app');
<template>
  <div class="container">
    <h4>Url Shortening</h4>
    <div class="form">
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="link"
          name="link"
          placeholder="https://example.com"
        />
      <button @click="saveUrl">Generate</button>
    </div>
    <ul>
      <li :key="index" v-for="(url, index) in urls">
        <div>
          <p>{{url.newUrl}}</p>
          <button @click="copyToClipboard(url.code)" >Copy Url</button>
        </div>
        <hr>
        <div>
          <p>{{url.originalUrl}}</p>
        </div>
<!--        {{url.code}} -->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Api from "@/service/api.service"

  @Component
  export default class UrlShorten extends Vue {
    private urls: any = []
    private link: string = ""
    private pathname: string = ""
    private code: string = ""

    mounted() {
      this.pathname = window.location.pathname
      // console.log(window.location)
      if (this.pathname.replace("/", "")) {
        // console.log(this.pathname)
        this.redirectUrl(this.pathname.replace("/", ""))
      }
      this.fetchAll()
      // console.log(this.urls)
    }

    fetchAll(): void {
      Api.getAll().then(res => {
        // console.log(res)
        this.urls = res.data
      }).catch(err => {
        console.log(err)
      })
    }

    saveUrl(): void {
      Api.add(this.link).then(res => {
        // console.log(res)
        // @ts-ignore
        if (res.data.nUrl) {
          // @ts-ignore
          this.urls.unshift(res.data.url)
        }
      }).catch(err => {
        console.log(err)
      })
    }

    redirectUrl(code: string): void {
      Api.get(code).then(res => {
        // console.log(res)
        // @ts-ignore
        window.location.replace(res.data.originalUrl)
      }).catch(err => {
        console.log(err)
      })
    }

    copyToClipboard(text: string): void {
      const cp = document.createElement("textarea");
      document.body.appendChild(cp);
      cp.value = window.location.origin+"/"+text;
      cp.select();
      document.execCommand("copy");
      document.body.removeChild(cp);
      alert(cp.value + "has been copied to clipboard")
    }
  }
</script>

<style scoped>
  body{
    background-color: #f2fff8;
  }
  .container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    overflow-y: hidden;
    overflow-x: auto;
    margin-top: -20px;
  }
  .form{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
  }
  .form > input{
    width: 80%;
    height: 30px;
  }
  .form > button{
    background-color: #42b983;
    color: white;
    border-color: transparent;
    border-radius: 2px;
    height: 40px;
  }
  .container > ul{
    list-style-type: none;
    padding-left: 0;
  }
  .container > ul > li{
    padding: 6px;
    margin-bottom: 1em;
    background-color: rgba(90, 98, 98, 0.3);
    border-radius: 5px;
  }
  .container > ul > li > div{
    display: flex;
    justify-content: center;
  }
  .container > ul > li > div > p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .container > ul > li > div > button{
    background-color: #ffffff;
    color: #3955ff;
    border-color: transparent;
    border-radius: 2px;
    margin-left: 5px;
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }
</style>
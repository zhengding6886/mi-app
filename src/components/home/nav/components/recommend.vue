<template>
  <div>
    <mt-swipe :auto="3000" :continuous="true">
      <mt-swipe-item v-for="(item,index) in swiperArr" :key="index">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div class="catelist">
      <ul>
        <li v-for="(item,i) in arr" :key="i">
          <a href="javascript:void(0);">
            <img :src="item.img" alt />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperArr: [
        {
          id: 1,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/939a2f677670d5c852b07ce574a78cae.jpg?thumb=1&w=720&h=360'
        },
        {
          id: 2,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d40feacc4d4fc31b3e6e65aa9891ea5.jpg?thumb=1&w=720&h=360'
        },
        {
          id: 3,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/63e0e2bf0e7cae90dd848823852a7247.jpg?thumb=1&w=720&h=360'
        }
      ],
      arr: [
        {
          id: 1,
          img:
            'http://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp'
        },
        {
          id: 2,
          img:
            'http://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp'
        },
        {
          id: 3,
          img:
            'http://i8.mifile.cn/v1/a1/26a132d9-c5ae-8a30-2705-f861e2e9f496.webp'
        },
        {
          id: 4,
          img:
            'http://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp'
        },
        {
          id: 5,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc8c791e7df386798f49876b1714323f.png?thumb=1&w=144&h=152'
        },
        {
          id: 6,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152'
        },
        {
          id: 7,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152'
        },
        {
          id: 8,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b92680601206b48b885d883c23b83e2.png?thumb=1&w=144&h=152'
        },
        {
          id: 9,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13da888d2d77bbe385d462b8d3b8c894.jpg?thumb=1&w=144&h=152'
        },
        {
          id: 10,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152'
        }
      ]
    }
  }
}
</script>
<style   scoped>
div {
  width: 100%;
  height: 320px;
  background: pink;
}
div img {
  width: 100%;
  height: 320px;
}

div ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
div ul li {
  list-style: none;
  flex: 1;
}
div ul li img {
  width: 150px;
  height: 160px;
}
</style>

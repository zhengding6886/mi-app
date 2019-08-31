<template>
  <div class="comment">
    <div class="person-wrap-comment" ref="personWrap_comment">
      <ul class="person-list-comment" ref="personTab_comment">
        <li class="person-item" v-for="(item,index) in list" :key="index">
          <div class="top">
              <div class="left">
                <img :src="item.user_avatar" alt="">
                <span class="username">{{item.user_name}}</span>
                <span class="create_time">{{item.add_time}}</span>
              </div>
              <span class="zan"><i>👍</i>1</span>
          </div>
          <div class="comment_text">
            <p class="text">{{item.comment_content}}</p>
            <div class="picture">
              <div class="img" v-for="(url,i) in item.comment_images" :key='i'>
                <img :src="url" alt="">
              </div>
            </div>
            <div class="replay">
              <p class="replay_text"><span class="re_name">官方回复：</span>{{item.reply_content}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="more">
      更多评论<i class="icon">▶</i>
    </div>
  </div>
</template>
<script>
import {getComment} from '@/api/axios'
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      list: [],
      width: 0,
      height: 0,
      total: 0
    }
  },
  methods: {
    personScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.personWrap_comment, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            scrollbar: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  },
  watch: {
    width () {
      this.$nextTick(() => {
        this.personScroll()
      })
    }
  },
  created () {
    getComment().then(res => {
      this.list = res.data.list
      this.length = this.list.length
      this.total = this.length * this.width
      this.$refs.personTab_comment.style.width = this.total + 'px'
    })
  },
  mounted () {
    this.width = this.$refs.personWrap_comment.clientWidth * 0.8
    this.$nextTick(() => {
      this.personScroll()
    })
  }
}
</script>
<style lang="less" scoped>
.comment{
  width: 100%;
  .person-wrap-comment{
    width: 100%;
    overflow: hidden;
    .person-list-comment{
      display: flex;
      flex-direction: row;
      li.person-item{
        flex: 1;
        margin: 0 20px;
        background: #fafafa;
        border-radius: 10px;
        padding: 20px 30px;
        box-sizing: border-box;
        .top{
          height: 80px;
          margin-bottom: 30px;
          .left{
            width: 60%;
            height: 80px;
            float: left;
            position: relative;
            img{
              width: 80px;
              height: 80px;
              border-radius: 50%;
              float: left;
            }
            span{
              display: block;
              float: left;
            }
            .username{
              margin-top: 10px;
              font-size: 30px;
              margin-left: 10px;
            }
            span.create_time{
              position: absolute;
              left: 90px;
              bottom: 5px;
              font-size: 20px;
              color: rgba(0, 0, 0, 0.54);
            }
          }
          .zan{
            display: block;
            width: 40%;
            float: right;
            text-align: right;
            height: 80px;
            line-height: 80px;
          }
        }
        .comment_text{
          width: 100%;
          .text{
            font-size: 26px;
          }
          .picture{
            width: 100%;
            height: 150px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 30px;
            overflow: hidden;
            .img{
              width: 33%;
              height: 150px;
              border-radius: 10px;
              padding: 10px;
              background: #fafafa;
              img{
                width: 100%;
              }
            }
          }
          .replay{
            height: 80px;
            font-size: 26px;
            line-height: 40px;
            color: rgba(0, 0, 0, 0.87);
            padding-bottom: 10px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
            overflow: hidden;
            .re_name{
              color: #ff6700;
            }
          }
        }
      }
    }
  }
  .more{
    width: 100%;
    text-align: center;
    color:#4e72a5;
    font-size: 34px;
    margin-bottom: 20px;
    padding: 25px;
    .icon{
      font-size: 28px;
      margin-left: 10px;
    }
  }
}
</style>

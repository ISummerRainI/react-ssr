import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getTopicDetailAction, clearTopicDetailAction } from 'store/actions/topicAction';
import './index.less';

class Detail extends Component {
  componentDidMount() {
    // this.getTopicDetail();
  }

  componentWillUnmount() {
    // const {
    //   clearTopicDetail,
    // } = this.props;
    // clearTopicDetail();
  }

  getTopicDetail = () => {
    const {
      match: {
        params: {
          id,
        },
      },
      getTopicDetail,
    } = this.props;
    getTopicDetail({
      id,
      mdrender: true,
    });
  }

  render() {
    // const {
    //   topicDetail,
    // } = this.props;
    const topicDetail = {
      id: '5c1760337ec239239ff579a2',
      author_id: '54009f5ccd66f2eb37190485',
      tab: 'share',
      content: '<div class="markdown-text"><p>Node Party 是社区发起的一个面向 Node.js 和大前端爱好者的非商业，社区驱动的技术分享聚会，希望能够构建一个持续的分享学习平台，一起发展大前端生态。</p>\n<p>北京1月12日Node Party线下活动（周六）下午2点到6点，将近100人</p>\n<ul>\n<li>主题分享（已确认，共5个主题：3个Node.js主题，一个运维，一个前端）\n<ul>\n<li>《重新认识Nodejs后端开发》 eggjs + React + SSR 做同构直出（去哪儿）</li>\n<li>《用mqtt协议实现nodejs长连接服务》Nodejs长连接，主要是性能和协议改造方面的（新浪）</li>\n<li>《浅谈nodejs异步那点事》（360）</li>\n<li>结合Node.js讲一下Docker 实践和原理（网易）</li>\n<li>iview作者：如何做好一个开源项目（TalkingData）</li>\n</ul>\n</li>\n<li>视情况可以考虑晚上AA聚</li>\n</ul>\n<p>时间：北京1月12日（周六）下午2点到6点\n地点：东直门TalkingData赞助的502教室\n人数：最多100人\n直播地址：<a href="https://live.bilibili.com/1353202">https://live.bilibili.com/1353202</a></p>\n<p>现场还有 <a href="/user/justjavac">@justjavac</a>，@小爵，@快手天翔 @王龑 等大咖。</p>\n<h2>主题</h2>\n<h3>1）《重新认识Nodejs后端开发》</h3>\n<p>兴百放，先就职在美团外卖事业部，负责前后端分离，以及 Nodejs 推广工作。本着不管黑猫白猫，只要能解决现实业务问题，提高团队工作效率，就是好猫的原则，致力于让团队成员从重复，耗时，繁琐的一些工作中解放出来。</p>\n<p>随着前端行业的蓬勃发展，越来越多的技术团队，对前端的职责范围，也慢慢的延伸到后端。这里就分享一些在我们进行服务自治（BFF），以及接管传统后端职责一些沉淀和经验。内容主要包括如何做技术框架的选型，使用 egg 一些经验总结，和 eggjs + React + SSR 做同构直出等内容 。</p>\n<h3>2）《Docker 实践和原理》</h3>\n<p>张晋涛，目前任网易有道资深运维开发工程师, 负责 DevOPS 实践落地及 Kubernetes 容器化平台及自动化平台的规划建设等。骨灰级 Linux/Vim 玩家，对 Docker， Kubernetes 及相关生态有大量实践及深入源码的研究。曾负责美图运维自动化平台体系建设。掘金小册《Kubernetes 从上手到实践》作者。</p>\n<p>随着 Kubernetes 等云原生技术的事实标准已经形成，容器化技术作为其重要的组成部分也被使用的越来越广泛。在我们的开发实践中，如何更好的利用容器化技术( Docker )来提升我们的开发，测试效率也是我们所关注的重点。 本次分享集中于如何用 Docker 提升我们的效率以及如何用好它。以 node 和 前端为入手点，希望能对大家有所帮助。</p>\n<h3>3）《浅谈nodejs异步那点事》</h3>\n<p>宋光宇 360前端工程师 360视频云/360云盘@奇舞团，</p>\n<p>nodejs给前端赋予了更多的生命力，它的异步模型给他带来无限的潜力。\n今天通过libuv这个nodejs核心库来聊聊nodejs异步的那点事。</p>\n<h3>4）iview作者：如何做好一个开源项目</h3>\n<p>Aresn，基于 Vue.js 的开源 UI 组件库 — iView 的作者。现担任大数据公司 TalkingData 前端架构师。著有《Vue.js实战》、《Vue.js组件精讲》。\nTopic：</p>\n<ul>\n<li>iView 的故事</li>\n<li>第一批用户</li>\n<li>持续运营</li>\n<li>国际化</li>\n<li>让更多的人参与</li>\n<li>让 Robot 来做“坏人”</li>\n<li>赞助与商业化</li>\n</ul>\n<h3>5）《用mqtt协议实现nodejs长连接服务》</h3>\n<p>刘露颖，曾就职搜狐视频，新浪博客，目前任职新浪移动团队资深前端开发工程师，负责nodejs相关的服务开发与维护、以及部分运维相关工作。致力于v8的研究，对c++与nodejs之间的关系有深厚兴趣，并付诸实践。</p>\n<p>mqtt协议随着各种手机app的普及，在移动互联网中有了广泛的应用，借着项目的实践过程，讲术如何更好的使mqtt与nodejs相结合，为现在越来越普遍的高并发场景提供长连接服务的解决方案。</p>\n<h2>微信群</h2>\n<p>群满100人后无法加群的, 添加我微信 mcdongWang 备注 node party 北京 我回拉你进群</p>\n<p><img src="//static.cnodejs.org/FvqZCML0PfbFHt6xknAhJmkWKDPU" alt="31545188678_.pic.jpg"></p>\n</div>',
      title: '【\b活动】北京1月12日Node Party活动',
      create_at: '2018-12-17T08:37:07.278Z',
      author: {
        loginname: 'i5ting',
        avatar_url: 'https://avatars3.githubusercontent.com/u/3118295?v=4&s=120',
      },
      is_collect: false,
    }
    return (
      <div className="topicContent">
        <h1>{topicDetail.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: topicDetail.content }} />
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   ...state.topic,
// })

// const mapDispatchToProps = dispatch => ({
//   getTopicDetail: params => dispatch(getTopicDetailAction(params)),
//   clearTopicDetail: () => dispatch(clearTopicDetailAction()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Detail);
export default Detail;

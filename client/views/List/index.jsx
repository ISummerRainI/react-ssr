import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { List, Avatar, Tag } from 'antd';

import { getTopicAction } from 'store/actions/topicAction';

import './index.less';

class ListPage extends Component {
  componentDidMount() {
    // this.getTopic();
  }

  // getTopic = () => {
  //   const {
  //     getTopic,
  //   } = this.props;
  //   getTopic({
  //     mdrender: false,
  //   });
  // }

  render() {
    const topics = [{
      id: '5c1760337ec239239ff579a2',
      author_id: '54009f5ccd66f2eb37190485',
      tab: 'share',
      content: 'Node Party 是社区发起的一个面向 Node.js 和大前端爱好者的非商业，社区驱动的技术分享聚会，希望能够构建一个持续的分享学习平台，一起发展大前端生态。\r\n\r\n北京1月12日Node Party线下活动（周六）下午2点到6点，将近100人',
      title: '【\b活动】北京1月12日Node Party活动',
      last_reply_at: '2019-01-03T06:47:35.762Z',
      good: false,
      top: true,
      reply_count: 15,
      visit_count: 2472,
      create_at: '2018-12-17T08:37:07.278Z',
      author: {
        loginname: 'i5ting',
        avatar_url: 'https://avatars3.githubusercontent.com/u/3118295?v=4&s=120',
      },
    }];
    return (
      <div className="topicList">
        {
          <List
            bordered
            itemLayout="horizontal"
            dataSource={topics}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.author.avatar_url} />}
                  title={(
                    <section>
                      {
                        item.top ? <Tag color="#2db7f5">置顶</Tag> : null
                      }
                      <a href={`/detail/${item.id}`}>{item.title}</a>
                    </section>
                  )}
                  description={
                    <div className="topic-content">{item.content}</div>
                  }
                />
              </List.Item>
            )}
          />
        }
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   ...state.topic,
// })

// const mapDispatchToProps = dispatch => ({
//   getTopic: params => dispatch(getTopicAction(params)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
export default ListPage;

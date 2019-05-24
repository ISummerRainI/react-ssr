import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { List, Avatar, Tag } from 'antd';

import { getTopicAction } from 'store/actions/topicAction';

import './index.less';

class ListPage extends Component {
  componentDidMount() {
    const {
      topics,
    } = this.props;
    if (Array.isArray(topics) && topics.length) return;
    this.getTopic();
  }

  getTopic = () => {
    const {
      getTopic,
    } = this.props;
    return getTopic({
      mdrender: false,
    });
  }

  bootstrap() {
    return this.getTopic();
  }

  render() {
    const {
      topics,
    } = this.props;
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
                      <Link to={`/detail/${item.id}`}>{item.title}</Link>
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

const mapStateToProps = state => ({
  ...state.topic,
})

const mapDispatchToProps = dispatch => ({
  getTopic: params => dispatch(getTopicAction(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
// export default ListPage;

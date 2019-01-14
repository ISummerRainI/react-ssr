import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { List, Avatar, Tag } from 'antd';

import { getTopic } from 'store/actions/topicAction';

import './index.less';

class ListPage extends Component {
  componentDidMount() {
    this.getTopic();
  }

  getTopic = () => {
    const {
      getTopic
    } = this.props;
    getTopic({
      mdrender: false,
    });
  }

  render() {
    const {
      testNum,
      topics,
    } = this.props;
    return (
      <div className="topicList">
        {
          <List
          bordered={true}
          itemLayout="horizontal"
          dataSource={topics}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.author.avatar_url} />}
                title={
                  <section>
                    {
                      item.top ? <Tag color="#2db7f5">置顶</Tag> : null
                    }
                    <Link to={`/detail/${item.id}`}>{item.title}</Link>
                  </section>
                }
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
  ...state.topic
})

const mapDispatchToProps = dispatch => ({
  getTopic: params => getTopic(dispatch, params)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

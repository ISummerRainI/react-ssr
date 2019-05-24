import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopicDetailAction, clearTopicDetailAction } from 'store/actions/topicAction';
import './index.less';

class Detail extends Component {
  componentDidMount() {
    const {
      topicDetail,
    } = this.props;
    console.log(topicDetail)
    if (topicDetail.id) return;
    this.getTopicDetail();
  }

  componentWillUnmount() {
    const {
      clearTopicDetail,
    } = this.props;
    clearTopicDetail();
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
    return getTopicDetail({
      id,
      mdrender: true,
    });
  }

  bootstrap() {
    return this.getTopicDetail();
  }

  render() {
    const {
      topicDetail,
    } = this.props;
    return (
      <div className="topicContent">
        <h1>{topicDetail.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: topicDetail.content }} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.topic,
})

const mapDispatchToProps = dispatch => ({
  getTopicDetail: params => dispatch(getTopicDetailAction(params)),
  clearTopicDetail: () => dispatch(clearTopicDetailAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

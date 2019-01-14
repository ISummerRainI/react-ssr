import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopicDetail, clearTopicDetail } from 'store/actions/topicAction';
import "./index.less";

class Detail extends Component {
  componentDidMount() {
    this.getTopicDetail();
  }
  componentWillUnmount() {
    const {
      clearTopicDetail
    } = this.props;
    clearTopicDetail();
  }

  getTopicDetail = () => {
    const {
      match: {
        params: {
          id
        }
      },
      getTopicDetail
    } = this.props;
    getTopicDetail({
      id,
      mdrender: true
    });
  }

  render() {
    const {
      topicDetail
    } = this.props;
    return (
      <div className="topicContent">
        <h1>{topicDetail.title}</h1>
        <hr/>
        <div dangerouslySetInnerHTML={{__html: topicDetail.content}} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.topic
})

const mapDispatchToProps = dispatch => ({
  getTopicDetail: params => getTopicDetail(dispatch, params),
  clearTopicDetail: () => clearTopicDetail(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

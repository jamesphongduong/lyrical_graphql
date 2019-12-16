import React, { Component } from "react";

class SongDetail extends Component {
  render() {
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

const query = query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }

export default SongDetail;

import React from "react";
import Tab from "./Tab";
class BlogArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1,
            dataObj: {
                stories: [
                    {
                        title: "Story 1",
                        min: 5,
                        reads: 23,
                        views: 52
                    },
                    {
                        title: "Story 2",
                        min: 4,
                        reads: 43,
                        views: 72
                    },
                    {
                        title: "Story 3",
                        min: 3,
                        reads: 73,
                        views: 702
                    }
                ],
                response: [
                    {
                        title: "Response 1",
                        min: 5,
                        reads: 23,
                        views: 52
                    },
                    {
                        title: "Re4sponse 2",
                        min: 4,
                        reads: 43,
                        views: 72
                    },
                    {
                        title: "Response 3",
                        min: 3,
                        reads: 73,
                        views: 702
                    }
                ],
                series: [
                    {
                        title: "Series 1",
                        min: 5,
                        reads: 23,
                        views: 52
                    },
                    {
                        title: "Series 2",
                        min: 4,
                        reads: 43,
                        views: 72
                    },
                    {
                        title: "Series 3",
                        min: 3,
                        reads: 73,
                        views: 702
                    }
                ]
            }
        };
    }
    changeTab = index => {
        this.setState({
            ...this.state,
            activeIndex: index
        });
    };
    render() {
        return (
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "20px"
                    }}
                >
                    <div
                        style={
                            this.state.activeIndex === 1
                                ? { borderBottom: "1px solid #000" }
                                : {}
                        }
                        onClick={() => {
                            this.changeTab(1);
                        }}
                    >
                        Stories
          </div>
                    <div
                        style={
                            this.state.activeIndex === 2
                                ? { borderBottom: "1px solid #000" }
                                : {}
                        }
                        onClick={() => {
                            this.changeTab(2);
                        }}
                    >
                        Response
          </div>
                    <div
                        style={
                            this.state.activeIndex === 3
                                ? { borderBottom: "1px solid #000" }
                                : {}
                        }
                        onClick={() => {
                            this.changeTab(3);
                        }}
                    >
                        Series
          </div>
                </div>
                {this.state.activeIndex === 1 && <Tab data={this.state.dataObj.stories} />}
                {this.state.activeIndex === 2 && <Tab data={this.state.dataObj.response}/>}
                {this.state.activeIndex === 3 && <Tab data={this.state.dataObj.series}/>}
            </div>
        );
    }
}

export default BlogArea;

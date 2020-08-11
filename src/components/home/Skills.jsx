import React from "react";
import {VictoryScatter, VictoryBar, VictoryLabel} from 'victory';
import {
  skills
} from "../../editable-stuff/configurations.json";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scatterData: this.getScatterData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        scatterData: this.getScatterData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getScatterData() {
    const colors = skills.colors;
    const symbols = skills.symbols;
    const skillsList = skills["technical-skills"];
    return skillsList.map((skill, index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100) + 2,
        size: Math.floor(Math.random() * 30 + 12),
        fill: colors[index % 7],
        skill: skill,
        opacity: 0.6,
        labels: { fontSize: 10 }
      };
    });
  }

  getBarGraph() {
    const skillsList = skills.skills;

    let bars = [];
    Object.entries(skillsList).forEach(([key, value]) => {
      let bar = <VictoryBar
          name={key}
          data={value.data}
          labels={value.labels}
        />;
      bars.push(bar);
    });

    return bars;
  }

  render() {
    return (
      <div id="skills" className="jumbotron jumbotron-fluid bg-transparent m-0">
        <div className="container container-fluid p-5">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-4 mb-5 text-center">{skills.heading}</h1>
              {/* <VictoryChart animate={{ duration: 2000, easing: "bounce" }}> */}
                <VictoryScatter
                  data={this.state.scatterData}
                  animate={{ duration: 3000, easing: "bounce" }}
                  style={{
                    data: {
                      fill: ({ datum }) => datum.fill,
                      opacity: ({ datum }) => datum.opacity
                    },
                    labels: { fontSize: "8px" }
                  }}
                  labels={({ datum }) => datum.skill}
                  labelComponent={<VictoryLabel dy={8}/>}
                />
              {/* </VictoryChart> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

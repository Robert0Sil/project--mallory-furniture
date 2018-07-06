import React, { Component } from 'react'

class Skill extends Component {

_genSkillJsx(){

  const skillArr = this.props.skill.map(function(skillStr, index){
    // console.log(skillStr);
    return <span className="skills-list__single" key={index}>{skillStr}</span>
  })
    return skillArr
    // console.log(skillArr);
}

  render() {

    return(
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {this._genSkillJsx()}
        </div>
      </section>
    );
  }
}


export default Skill;

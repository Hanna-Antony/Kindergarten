import React from 'react';
import './program.css';
import baby from '../../assets/babies.jpg';
import tod from '../../assets/tod.jpeg';
import kinder from '../../assets/kin.jpg';

const Program = () => {
  return (
    <div id='program' className="program">
      <h1 className='heading'>Program</h1>
      <div className="section">
        <h1>Infant Care</h1>
        <div className="grid-container">
          <img src={baby} alt="" className="image" />
          <p className="paragraph">
            Infants enrolled in this program adhere to their own individual schedule throughout the day. Information provided by the parents is used to plan each child’s day according to his/her needs. As a result, feeding, diapering and napping are an integral part of the daily curriculum.
          </p>
        </div>
      </div>
      <div className="section">
        <h1>Toddlers</h1>
        <div className="grid-container">
          <img src={tod} alt="" className="image" />
          <p className="paragraph">
            Children can enroll in our preschool starting when they are one and a half years old, and it is designed to stimulate your child’s senses and unleash their innate curiosity. The teachers plan for opportunities for your child to gain a sense of self-esteem, self-worth, self-confidence and aspects of independence.  We focus on achieving the cognitive, communication, language, social, emotional, and motor milestones.
          </p>
        </div>
      </div>
      <div className="section">
        <h1>Kindergarten</h1>
        <div className="grid-container">
          <img src={kinder} alt="" className="image" />
          <p className="paragraph">
            Caterpillarz Kindergarten 1 (K1) for 3-4-year-olds, builds children’s learning skills and prepares them to explore the key concepts about direction, location, position, number, quantity, sequence, attributes, dimension, size, similarities, and differences, as well as social skills to prepare them for a lifetime of healthier interactions in all aspects of life.

            Kindergarten 2 (K2) for 4-5-year-olds enables them to read and write in preparation for Year 1. The Early Years curriculum is play-based learning to enable children to explore and make sense of the world around them and use and develop their imagination and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Program;
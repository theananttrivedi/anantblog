import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frontend',
    imageSrc: require('@site/static/img/assets/javascriptLogo.png').default,
    description: (
      <>
        HTML, CSS, Javascript, Typescript, React as well as other things
        from the React Ecosystem like Redux, Router, Next.
      </>
    ),
  },
  {
    title: 'Backend',
    imageSrc: require('@site/static/img/assets/pythonLogo.png').default,
    description: (
      <>
        Python, Django, Postgresql
      </>
    ),
  },
  {
    title: 'Programming',
    imageSrc: require('@site/static/img/assets/laptopStyled.jpg').default,
    description: (
      <>
        I talk about Programming, Design Systems, Programmin Patterns
        as well as other interesting things about programming.
      </>
    ),
  },
];

function Feature({imageSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

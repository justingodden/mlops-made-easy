import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// const FeatureList = [
//   {
//     title: "Free to Use",
//     Svg: require("@site/static/img/write.svg").default,
//     description: (
//       <>
//         We will only use free and open-source tools.
//         <br />
//         <br />
//         The only (entirely optional) cost endured will be from cloud computing
//         resources. Examples will be runnable locally, but we won't skip the
//         details to run in a production environment. Tying into our second
//         principle.
//       </>
//     ),
//   },
//   {
//     title: "Production Ready",
//     Svg: require("@site/static/img/network-security.svg").default,
//     description: (
//       <>
//         Most tutorials only give a cannonical <code>Hello, World!</code>/
//         <code>mnist</code> example which can be difficult to adapt to production
//         requirements.
//         <br />
//         <br />
//         We (optionally) use AWS, and don't skip the details that take a toy
//         project to production-ready; with security, scale and relabilty in mind.
//       </>
//     ),
//   },
//   {
//     title: "Comprehensive",
//     Svg: require("@site/static/img/blueprint.svg").default,
//     description: (
//       <>
//         Learn the skills to manage your own complete ML platform; from data
//         management to ML experimentation, deployment and monitoring.
//         <br />
//         <br />
//         Using industry standard tools and best practices.
//       </>
//     ),
//   },
// ];

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("col col--4")}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HomepageInstructor() {
  return (
    <section className={styles.instructor}>
      <div className="container">
        <div className={clsx("col")}>
          <div className="text--center padding-horiz--md">
            <h3>Meet your instructor</h3>
          </div>
          <div className="text--center">
            <img
              className={styles.instructorImg}
              src="https://github.com/justingodden.png"
            />
          </div>
          <div className="text--center padding-horiz--md">
            <p>Hi, I'm Justin Godden</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, tempora a provident aspernatur eum magnam amet eos quia
              doloremque minima quo animi sed, adipisci inventore dolore!
              Dolorem aliquam culpa quae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

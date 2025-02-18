import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="homeDiv">
          <div className="homeInfo">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              Hi, I&apos;m Manav Dhami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}>
              A passionate [Your Profession] creating interactive and dynamic
              web experiences.
            </motion.p>
          </div>
          <div className="homeImg">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200">
              <defs>
                <mask id="designerMask">
                  <rect width="200" height="200" fill="white" />
                  <circle cx="100" cy="100" r="80" fill="black" />
                  <rect x="50" y="50" width="100" height="100" fill="black" />
                  <line
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="200"
                    stroke="black"
                    strokeWidth="10"
                  />
                </mask>
              </defs>
              <rect
                width="200"
                height="200"
                fill="#23c0da"
                mask="url(#designerMask)"
              />
              <circle cx="100" cy="85" r="30" fill="#f4f4f4" />
              <rect
                x="70"
                y="110"
                width="60"
                height="50"
                rx="10"
                fill="#f4f4f4"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

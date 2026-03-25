import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const CodingProfile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="coding" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
          >
            Problem <span className="text-gradient">Solving</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
          <p className="mt-6 text-[#a8a8b8] max-w-2xl mx-auto text-lg">
            A track record of algorithmic problem solving on popular coding platforms.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* LeetCode Card */}
          <motion.div variants={itemVariants} className="group h-full perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] min-h-[350px]">
              {/* LeetCode Front */}
              <div className="absolute inset-0 glass p-8 rounded-2xl border border-[#c9a961]/10 [backface-visibility:hidden]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/5 to-transparent"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-[#2a2a2a] rounded-xl flex items-center justify-center border border-[#c9a961]/20">
                    <SiLeetcode className="text-3xl text-[#FFA116]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#e8e8e8]">LeetCode</h3>
                    <a href="https://leetcode.com/nitintyagi954" target="_blank" rel="noreferrer" className="text-sm text-[#a8a8b8] hover:text-[#c9a961] transition-colors">@nitintyagi954</a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div className="bg-[#1f1f1f] p-4 rounded-xl border border-white/5">
                    <p className="text-[#a8a8b8] text-sm mb-1">Total Solved</p>
                    <p className="text-3xl font-bold text-[#c9a961]">246</p>
                  </div>
                  <div className="bg-[#1f1f1f] p-4 rounded-xl border border-white/5">
                    <p className="text-[#a8a8b8] text-sm mb-1">Contest Rating</p>
                    <p className="text-3xl font-bold text-[#c9a961]">1,522</p>
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-[#00b8a3]">Easy: 95</span>
                    <span className="text-[#ffc01e]">Med: 137</span>
                    <span className="text-[#ff375f]">Hard: 14</span>
                  </div>
                  <div className="w-full h-2 bg-[#2a2a2a] rounded-full overflow-hidden flex">
                    <div style={{width: '38%'}} className="bg-[#00b8a3] h-full"></div>
                    <div style={{width: '56%'}} className="bg-[#ffc01e] h-full"></div>
                    <div style={{width: '6%'}} className="bg-[#ff375f] h-full"></div>
                  </div>
                  <div className="pt-4 flex justify-between items-center text-sm text-[#a8a8b8] border-t border-white/5">
                    <span>Top 38.05%</span>
                    <span>Max Streak: 31 Days</span>
                  </div>
                </div>
              </div>

              {/* LeetCode Back */}
              <div className="absolute inset-0 glass p-2 rounded-2xl border border-[#c9a961]/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center overflow-hidden">
                 <img 
                    // src="https://ik.imagekit.io/atproduction/Screenshot%202026-03-25%20225527.png" 
                    src="https://ik.imagekit.io/atproduction/Screenshot%202026-03-25%20230740.png"
                    alt="LeetCode Profile" 
                    className="w-full h-full object-cover rounded-xl"
                  />
              </div>
            </div>
          </motion.div>

          {/* GeeksforGeeks Card */}
          <motion.div variants={itemVariants} className="group h-full perspective-1000">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] min-h-[350px]">
              {/* GeeksforGeeks Front */}
              <div className="absolute inset-0 glass p-8 rounded-2xl border border-[#c9a961]/10 [backface-visibility:hidden]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/5 to-transparent"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-[#2a2a2a] rounded-xl flex items-center justify-center border border-[#c9a961]/20">
                    <SiGeeksforgeeks className="text-3xl text-[#2F8D46]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#e8e8e8]">GeeksforGeeks</h3>
                    <a href="https://auth.geeksforgeeks.org/user/nitintyagi954" target="_blank" rel="noreferrer" className="text-sm text-[#a8a8b8] hover:text-[#c9a961] transition-colors">Nitin Tyagi</a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div className="bg-[#1f1f1f] p-4 rounded-xl border border-white/5">
                    <p className="text-[#a8a8b8] text-sm mb-1">Coding Score</p>
                    <p className="text-3xl font-bold text-[#c9a961]">174</p>
                  </div>
                  <div className="bg-[#1f1f1f] p-4 rounded-xl border border-white/5">
                    <p className="text-[#a8a8b8] text-sm mb-1">Problems Solved</p>
                    <p className="text-3xl font-bold text-[#c9a961]">47</p>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="bg-[#1f1f1f] p-4 rounded-xl border border-white/5">
                    <p className="text-[#a8a8b8] text-sm mb-1">Institute Rank</p>
                    <p className="text-xl font-bold text-[#e8e8e8]">7,599 <span className="text-sm font-normal text-[#a8a8b8] ml-2">(LPU Jalandhar)</span></p>
                  </div>
                  <div className="pt-2 flex justify-between items-center text-sm text-[#a8a8b8]">
                    <span>Active Profile</span>
                    <span>Consistency Tracker</span>
                  </div>
                </div>
              </div>

              {/* GeeksforGeeks Back */}
              <div className="absolute inset-0 glass p-2 rounded-2xl border border-[#c9a961]/10 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center overflow-hidden">
                 <img 
                    src="https://ik.imagekit.io/atproduction/image(4).png" 
                    alt="GeeksforGeeks Profile" 
                    className="w-full h-full object-cover rounded-xl"
                  />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfile;

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiMongodb, SiFirebase, SiGraphql, SiAmazonwebservices, SiOpenai, SiStripe } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Custom Gemini Icon Component
const GeminiIcon = ({ isActive, className }) => {
  const size = isActive ? 28 : 32;
  return (
    <div className={className} style={{ width: `${size}px`, height: `${size}px` }}>
      {isActive ? (
        <Image
          src="/images/svgs/gemini-color.svg"
          alt="Gemini"
          width={size}
          height={size}
          className="w-full h-full"
          unoptimized
        />
      ) : (
        <Image
          src="/images/svgs/gemini-black.svg"
          alt="Gemini"
          width={size}
          height={size}
          className="w-full h-full opacity-[0.35]"
          unoptimized
        />
      )}
    </div>
  );
};

// Grid positions mapping for adjacency checking
// id 0: row 0, col 2
// id 1: row 1, col 0
// id 2: row 1, col 3
// id 3: row 1, col 4
// id 4: row 2, col 1
// id 5: row 2, col 2
// id 6: row 2, col 3
// id 7: row 3, col 0
// id 8: row 3, col 3
// id 9: row 4, col 2
// id 10: row 4, col 3
// id 11: row 4, col 4

const gridPositions = [
  { id: 0, row: 0, col: 2 },
  { id: 1, row: 1, col: 0 },
  { id: 2, row: 1, col: 3 },
  { id: 3, row: 1, col: 4 },
  { id: 4, row: 2, col: 1 },
  { id: 5, row: 2, col: 2 },
  { id: 6, row: 2, col: 3 },
  { id: 7, row: 3, col: 0 },
  { id: 8, row: 3, col: 3 },
  { id: 9, row: 4, col: 2 },
  { id: 10, row: 4, col: 3 },
  { id: 11, row: 4, col: 4 },
];


// Mixed row activation sequence ensuring no adjacent squares
// Each sequence mixes squares from different rows and ensures no adjacency
// Mix of 1, 2, and 3 active squares for variety
const activationSequence = [
  [0],                 // 1 active - Row 0
  [2, 9],              // 2 active - Row 1, Row 4 - no adjacent
  [1, 5, 8],           // 3 active - Row 1, Row 2, Row 3 - no adjacent
  [3],                 // 1 active - Row 1
  [4, 11],             // 2 active - Row 2, Row 4 - no adjacent
  [0, 6, 10],          // 3 active - Row 0, Row 2, Row 4 - no adjacent
  [7],                 // 1 active - Row 3
  [2, 5],              // 2 active - Row 1, Row 2 - no adjacent
  [1, 4, 9],           // 3 active - Row 1, Row 2, Row 4 - no adjacent
  [8],                 // 1 active - Row 3
  [3, 6],              // 2 active - Row 1, Row 2 - no adjacent
  [0, 5, 11],          // 3 active - Row 0, Row 2, Row 4 - no adjacent
  [9],                 // 1 active - Row 4
  [1, 7],              // 2 active - Row 1, Row 3 - no adjacent
  [2, 4, 8],           // 3 active - Row 1, Row 2, Row 3 - no adjacent
  [10],                // 1 active - Row 4
  [3, 9],              // 2 active - Row 1, Row 4 - no adjacent
  [0, 5, 7],           // 3 active - Row 0, Row 2, Row 3 - no adjacent
];

// Skills mapping for each item ID (0-11)
const skillsData = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next", icon: SiNextdotjs, color: "#000000" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Gemini", icon: GeminiIcon, color: "#4285F4", isCustom: true },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Open AI", icon: SiOpenai, color: "#10A37F" },
  { name: "Node", icon: FaNodeJs, color: "#339933" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "Nest", icon: SiNestjs, color: "#E0234E" },
];

const StripeAnimation = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [gridItems, setGridItems] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const sequenceIndexRef = useRef(0);

  // Generate hardcoded grid structure
  useEffect(() => {
    const rows = 5;
    const cols = 5;
    const squareSize = 80;
    const gap = 16;
    
    const items = [];
    let id = 0;

    // Hardcoded pattern:
    // Row 1: column 3 (0-indexed: row 0, col 2)
    // Row 2: columns 1, 4, 5 (0-indexed: row 1, cols 0, 3, 4)
    // Row 3: columns 2, 3, 4 (0-indexed: row 2, cols 1, 2, 3)
    // Row 4: columns 1, 4 (0-indexed: row 3, cols 0, 3)
    // Row 5: columns 3, 4, 5 (0-indexed: row 4, cols 2, 3, 4)
    const visibleSquares = [
      [2],           // Row 1: column 3 (0-indexed: 2)
      [0, 3, 4],     // Row 2: columns 1, 4, 5 (0-indexed: 0, 3, 4)
      [1, 2, 3],     // Row 3: columns 2, 3, 4 (0-indexed: 1, 2, 3)
      [0, 3],        // Row 4: columns 1, 4 (0-indexed: 0, 3)
      [2, 3, 4],     // Row 5: columns 3, 4, 5 (0-indexed: 2, 3, 4)
    ];
    
    for (let row = 0; row < rows; row++) {
      const columnsToKeep = visibleSquares[row];
      
      columnsToKeep.forEach((col) => {
        const currentId = id++;
        items.push({
          id: currentId,
          row,
          col,
          x: col * (squareSize + gap),
          y: row * (squareSize + gap),
          skill: skillsData[currentId] || skillsData[0], // Fallback to first skill if out of range
        });
      });
    }

    setGridItems(items);
  }, []);

  // Activate items based on hardcoded sequence with smooth transitions
  useEffect(() => {
    if (gridItems.length === 0) return;

    const INTERVAL_DURATION = 2500; // Time each sequence is visible (2.5 seconds)

    const activateNextSequence = () => {
      // Get the current sequence of item IDs to activate
      const currentSequence = activationSequence[sequenceIndexRef.current];
      
      // Validate that all IDs in the sequence exist in gridItems
      const validSequence = currentSequence.filter(id => 
        gridItems.some(item => item.id === id)
      );
      
      // Update active indices (this will trigger smooth animation)
      setActiveIndices(validSequence);
      
      // Move to next sequence (cycle back to start if at end)
      sequenceIndexRef.current = (sequenceIndexRef.current + 1) % activationSequence.length;
    };

    // Initial activation after a short delay
    const initialTimeout = setTimeout(() => {
      if (gridItems.length > 0 && activationSequence.length > 0) {
        const initialSequence = activationSequence[0];
        const validSequence = initialSequence.filter(id => 
          gridItems.some(item => item.id === id)
        );
        setActiveIndices(validSequence);
        sequenceIndexRef.current = 1; // Set to next sequence for the first cycle
      }
    }, 300);

    // Change active items at regular intervals
    const interval = setInterval(() => {
      activateNextSequence();
    }, INTERVAL_DURATION);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [gridItems]);

  // Calculate grid container dimensions
  const squareSize = 80;
  const gap = 16;
  const maxCols = 5;
  const maxRows = 5;
  const containerWidth = maxCols * squareSize + (maxCols - 1) * gap;
  const containerHeight = maxRows * squareSize + (maxRows - 1) * gap;

  return (
    <div className="relative h-full w-full overflow-visible rounded-lg flex items-center justify-center p-2">
      <div 
        className="relative mx-auto" 
        style={{ 
          width: `${containerWidth}px`, 
          height: `${containerHeight}px`,
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      >
        {gridItems.map((item) => {
          const isActive = activeIndices.includes(item.id) || hoveredId === item.id;
          const { skill } = item;
          const IconComponent = skill.icon;
          
          return (
            <motion.div
              key={item.id}
              className={`rounded-lg flex items-center justify-center relative cursor-pointer ${
                isActive
                  ? "bg-white shadow-lg shadow-gray-400/20 dark:shadow-gray-900/30 z-10 border border-white/20"
                  : "bg-gray-100/60 dark:bg-transparent border border-gray-600/50 dark:border-gray-300/50 z-0"
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: 'absolute',
                left: `${item.x}px`,
                top: `${item.y}px`,
                width: '80px',
                height: '80px',
              }}
              initial={false}
              animate={{
                scale: isActive ? 1.15 : 1,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.5,
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  y: isActive ? -8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  mass: 0.5,
                }}
              >
                {skill.isCustom ? (
                  <IconComponent
                    isActive={isActive}
                    className={`transition-all duration-300 flex items-center justify-center ${
                      isActive ? "w-[28px] h-[28px]" : "w-[32px] h-[32px]"
                    }`}
                  />
                ) : (
                  <IconComponent
                    className={`transition-all duration-300 ${
                      isActive ? "text-[28px]" : "text-[36px]"
                    }`}
                    style={{
                      color: isActive ? skill.color : "#9CA3AF",
                    }}
                  />
                )}
              </motion.div>
              <motion.span
                className="absolute text-[11px] font-semibold text-center px-1 leading-tight text-gray-800 dark:text-gray-800 whitespace-nowrap"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 5,
                  x: '-50%',
                }}
                style={{
                  bottom: '8px',
                  left: '50%',
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StripeAnimation;


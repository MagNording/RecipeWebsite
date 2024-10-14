import { FaStar } from "react-icons/fa";

export function displayStarRating(rating) {
    const colors = {
      orange: "#ec9b19",
      grey: "rgb(192,192,192)"
    }
    const stars = Array(5).fill(0);
  
    return (
      <div>
        {stars.map((_, index) => {
          const starFill = Math.min(Math.max(rating - index, 0), 1); // calculate how full this star should be
  
          return (
            <div key={index} style={{ position: 'relative', width: '24px', height: '24px' }}>
              {/* full grey star as background */}
              <FaStar size={24} color={colors.grey} />
              {/* partially filled star */}
              <FaStar
                size={24}
                color={colors.orange}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  clipPath: `inset(0 ${(1 - starFill) * 100}% 0 0)`, // Clip the star based on the fill percentage
                }}
              />
            </div>
          );
        })}
      </div>
    );
}

export function categorizeDifficulty(minutes) {
    if (minutes <= 30) {
      return 'Enkel';
    } else if (minutes > 30 && minutes <= 60) {
      return 'Medelsvår';
    } else if (minutes > 60 && minutes <= 90) {
      return 'Svår';
    } else {
      return 'Komplicerad';
    }
}

export function renderDifficultyBars(minutes, style) {
    const difficultyLevels = categorizeDifficulty(minutes);
    const numberOfBars = {
      Enkel: 1,
      Medelsvår: 2,
      Svår: 3,
      Komplicerad: 4
    }[difficultyLevels];

    return (
      <div className={style['difficulty-level']}>
        <span className={style['difficulty-text']}>{difficultyLevels}</span>
        <div className={style['difficulty-bars']}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`${style.bar} ${i < numberOfBars ? style.filled : ''}`}></div>
          ))}
        </div>
      </div>
    );
}
  
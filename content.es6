import React, { PropTypes } from 'react';
import { codify } from './utils';

function StatsContent({ className = 'stats', stats }) {
  return (
    <aside className={`${className}__content`}>
      <dl
        className={`${className}__list`}
        itemProp="additionalProperty" itemScope itemType="http://schema.org/PropertyValue"
      >
        {
          stats.map(({ key, value }) => {
            const code = codify(key);
            return [
              <dt
                className={[ `${className}__stat-term`, `${className}__stat-${code}-term` ].join(' ')}
              >
                {key}
              </dt>,
              <dd
                className={[ `${className}__stat-description`, `${className}__stat-${code}-value` ].join(' ')}
                itemProp={key}
              >
                {value}
              </dd>,
            ];
          })
        }
      </dl>
    </aside>
  );
}

if (process.env.NODE_ENV !== 'production') {
  StatsContent.propTypes = {
    className: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
      })
    ).isRequired,
  };
}

export default StatsContent;
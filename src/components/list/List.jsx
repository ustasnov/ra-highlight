import PropTypes from 'prop-types';
import Video from '../video/Video';
import Article from '../article/Article';
import withHighlighting from '../withhighlighting/withHighlighting';

export default function List(props) {
  return props.list.map((item, index) => {
      switch (item.type) {
          case 'video': {
              const HighlightingVideo = withHighlighting(Video);
              return (
                  <HighlightingVideo key={index} {...item} />
              );
            }
          case 'article': {
            const HighlightingArticle = withHighlighting(Article);
              return (
                  <HighlightingArticle key={index} {...item} />
              );
            }
      }
  });
}

List.propTypes = {
  list: PropTypes.array
}

/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '@/config/firebase';
import Loader from '@/components/Loader';
import { Balancer } from 'react-wrap-balancer';
import { getAuth } from 'firebase/auth';
import dayjs from 'dayjs';
import LazyLoad from '@/components/common/LazyLoad';
import CommentSection from '@/components/commentsSection/CommentSection';

const SinglePost = () => {
  const auth = getAuth();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { articleId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogRef = doc(db, 'blogs', articleId);
        const docSnap = await getDoc(blogRef);
        if (docSnap.exists()) {
          setBlogData({
            id: docSnap.id,
            data: docSnap.data(),
          });
          console.log(blogData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [articleId]);

  if (loading) {
    return <Loader />;
  }

  if (!blogData) {
    return (
      <div className='mx-auto max-w-6xl text-gray-400'>
        <p className='text-center text-2xl font-bold'>Article not found.</p>
      </div>
    );
  }

  const formattedDate = blogData.data.timestamp
    ? dayjs(blogData.data.timestamp.toDate()).format('YYYY-MM-DD')
    : '';

  const fallBackImage = '/FcLogo.png';

  // Destructure the blog data
  const { blogData: blogContent, author } = blogData.data;
  const { title, content, category, imageUrl } = blogContent || {};

  return (
    <div className='pt-40 mx-auto max-w-6xl text-gray-400 prose-h1:text-orange-700 prose-h2:py-2 prose-h2:text-2xl prose-h2:text-slate-300 prose-h3:text-zinc-500 prose-p:font-mono prose-p:tracking-wide prose-a:text-blue-500 prose-a:underline prose-li:list-disc  prose-li:font-mono '>
      <div className='mx-auto mt-14 w-[90%] lg:w-[60%]'>
        <LazyLoad
          classes={'rounded-lg'}
          image={imageUrl ? imageUrl : fallBackImage}
        />
        <div className='mt-5 flex items-center justify-center'>
          😎{' '}
          <p>
            <i className='font-extralight text-gray-600'>
              &nbsp; Written by ~{' '}
            </i>
            <strong className='text-slate-300'>
              {author?.name || 'Anonymous'}
            </strong>{' '}
            on <strong className='text-slate-300'>{formattedDate}</strong>
          </p>
        </div>
      </div>
      <div className='mx-4'>
        <p className=' px-10 pt-10 text-slate-300'>
          Tags:{' '}
          <span className='ml-3 rounded-xl  bg-orange-700 px-4 py-2 text-white'>
            {category || 'Uncategorized'}
          </span>{' '}
        </p>
        <h1 className='mx-auto mt-12 w-full text-center text-2xl font-extrabold md:w-[90%] md:text-4xl'>
          <Balancer>{title}</Balancer>
        </h1>
        <article className='space-y-3 hyphens-auto px-4 py-10 font-lexend  leading-relaxed md:px-20 '>
          <Balancer className='text-[18px] leading-7 md:text-[23px] md:leading-9 lg:leading-10 '>
            {content}
          </Balancer>
        </article>
      </div>
      <div className='mx-auto mb-10 mt-3 w-[80%] lg:w-full lg:px-20'>
        {/* Fetched Comments */}
        <div className='max-h-[30rem] space-y-4 overflow-y-scroll'>
          {blogData?.data?.comments?.length > 0 ? (
            blogData.data.comments.map((comment, index) => {
              const formatDate = dayjs(comment.timestamp).format('DD-MM-YYYY');
              return (
                <div key={index} className='mt-6 rounded-md bg-zinc-800 p-2'>
                  <ul className='relative flex items-center pt-2 '>
                    <img
                      className='mr-3 h-10 w-10 rounded-full'
                      src={comment.userImage || avatar}
                      alt='Rounded avatar'
                    />
                    <span className='pl-1'>
                      <strong>{comment.userName || 'Anonymous'}</strong>{' '}
                      <span className='pl-2 text-zinc-600'> {formatDate} </span>
                    </span>
                  </ul>
                  <p className='ml-14 w-[80%] pt-2'>{comment.comment}</p>
                </div>
              );
            })
          ) : (
            <p className='mt-6 text-center text-gray-500'>No comments yet.</p>
          )}
        </div>
        <CommentSection articleId={articleId} />

        
      </div>
    </div>
  );
};

export default SinglePost;

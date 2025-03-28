import React, { useState, useRef } from 'react';
import { Box, Typography, Paper, IconButton, Card } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { keyframes } from '@mui/system';

const flipRight = keyframes`
  0% {
    transform: rotateY(0deg);
    transform-origin: left;
  }
  100% {
    transform: rotateY(-180deg);
    transform-origin: left;
  }
`;

const flipLeft = keyframes`
  0% {
    transform: rotateY(180deg);
    transform-origin: right;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: right;
  }
`;

const FlipBook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('right');
  const pageRefs = useRef([]);

  const handleNextPage = () => {
    if (currentPage < pages.length - 1 && !flipping) {
      setFlipping(true);
      setFlipDirection('right');
      
      const pageEl = pageRefs.current[currentPage];
      if (pageEl) {
        pageEl.style.animation = `${flipRight} 0.8s ease-in-out forwards`;
        
        setTimeout(() => {
          setCurrentPage(currentPage + 1);
          setFlipping(false);
        }, 800);
      }
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !flipping) {
      setFlipping(true);
      setFlipDirection('left');
      
      const pageEl = pageRefs.current[currentPage - 1];
      if (pageEl) {
        pageEl.style.animation = `${flipLeft} 0.8s ease-in-out forwards`;
        
        setTimeout(() => {
          setCurrentPage(currentPage - 1);
          setFlipping(false);
        }, 800);
      }
    }
  };

  const getRef = (el, index) => {
    pageRefs.current[index] = el;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        perspective: '1500px',
        my: 6,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 800,
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          borderRadius: 2,
          bgcolor: '#f8f8f8',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}
      >
        {pages.map((page, index) => (
          <Card
            key={index}
            ref={(el) => getRef(el, index)}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transformOrigin: index < currentPage ? 'left center' : 'right center',
              transform: index < currentPage ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.5s ease',
              display: index === currentPage || index === currentPage - 1 ? 'block' : 'none',
              zIndex: pages.length - index,
              bgcolor: '#fff',
              p: 4,
              boxSizing: 'border-box',
              overflowY: 'auto',
            }}
          >
            <Box
              sx={{
                height: '100%',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {page}
            </Box>
          </Card>
        ))}
      </Paper>

      <IconButton
        onClick={handlePrevPage}
        disabled={currentPage === 0 || flipping}
        sx={{
          position: 'absolute',
          left: { xs: 0, md: -50 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          opacity: currentPage === 0 ? 0.5 : 1,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNextPage}
        disabled={currentPage === pages.length - 1 || flipping}
        sx={{
          position: 'absolute',
          right: { xs: 0, md: -50 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          opacity: currentPage === pages.length - 1 ? 0.5 : 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          bottom: -35,
          color: 'text.secondary',
        }}
      >
        Trang {currentPage + 1} / {pages.length}
      </Typography>
    </Box>
  );
};

export default FlipBook;
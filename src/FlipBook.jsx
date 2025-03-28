import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, IconButton, Card } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { keyframes } from '@mui/system';

// Hiệu ứng lật trang sang phải
const flipRight = keyframes`
  0% {
    transform: rotateY(0deg);
    transform-origin: left;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
  }
  25% {
    transform: rotateY(-30deg);
    transform-origin: left;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: rotateY(-90deg);
    transform-origin: left;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  }
  75% {
    transform: rotateY(-150deg);
    transform-origin: left;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: rotateY(-180deg);
    transform-origin: left;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Modified animation keyframes for reverse page flipping
const flipLeft = keyframes`
  0% {
    transform: rotateY(180deg);
    transform-origin: right;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
  25% {
    transform: rotateY(150deg);
    transform-origin: right;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: rotateY(90deg);
    transform-origin: right;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  }
  75% {
    transform: rotateY(30deg);
    transform-origin: right;
    box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: right;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;


// Hiệu ứng đổ bóng của trang sách
const pageTurnShadow = keyframes`
  0% {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const FlipBook = ({ pages, title = "Sách điện tử" }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [flipping, setFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState('right');
    const [bookOpen, setBookOpen] = useState(true);
    const pageRefs = useRef([]);
    const bookRef = useRef(null);
    const coverRef = useRef(null);
    const [bookWidth, setBookWidth] = useState(800);

    // Điều chỉnh kích thước của sách theo màn hình
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                setBookWidth(width - 40);
            } else if (width < 960) {
                setBookWidth(width - 100);
            } else {
                setBookWidth(800);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Hiệu ứng khi mở trang đầu tiên
        setTimeout(() => {
            if (coverRef.current) {
                setBookOpen(true);
                coverRef.current.style.transform = 'rotateY(-180deg)';
            }
        }, 1000);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Xử lý lật trang tiếp theo
    const handleNextPage = () => {
        if (currentPage === -1) {
            // If on cover, open cover with improved animation
            setFlipping(true);
            if (coverRef.current) {
                // Add a CSS class for better animation control
                coverRef.current.classList.add('page-turning');
                coverRef.current.style.transition = 'transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
                coverRef.current.style.transform = 'rotateY(-180deg)';

                setTimeout(() => {
                    setCurrentPage(0);
                    setFlipping(false);
                    coverRef.current.classList.remove('page-turning');
                }, 1200);
            }
        } else if (currentPage < pages.length - 1 && !flipping) {
            setFlipping(true);
            setFlipDirection('right');

            const pageEl = pageRefs.current[currentPage];
            if (pageEl) {
                // Use the enhanced animation with cubic-bezier easing
                pageEl.style.animation = `${flipRight} 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards`;
                pageEl.style.zIndex = pages.length + 5;

                // Add page turning sound effect if needed
                // const audio = new Audio('/sounds/page-flip.mp3');
                // audio.volume = 0.5;
                // audio.play();

                // Add shadow during animation for 3D effect
                const shadowEl = document.createElement('div');
                shadowEl.className = 'page-shadow';
                shadowEl.style.position = 'absolute';
                shadowEl.style.left = '0';
                shadowEl.style.top = '0';
                shadowEl.style.width = '100%';
                shadowEl.style.height = '100%';
                shadowEl.style.background = 'linear-gradient(to left, rgba(0,0,0,0.2), transparent)';
                shadowEl.style.pointerEvents = 'none';
                shadowEl.style.zIndex = pages.length + 4;
                shadowEl.style.opacity = '0';
                shadowEl.style.animation = 'shadowFade 1.2s ease-in-out';

                // Append and remove shadow element
                bookRef.current.appendChild(shadowEl);

                setTimeout(() => {
                    setCurrentPage(currentPage + 1);
                    setFlipping(false);
                    if (bookRef.current.contains(shadowEl)) {
                        bookRef.current.removeChild(shadowEl);
                    }
                }, 1200);
            }
        }
    };

    // Xử lý lật về trang trước
    const handlePrevPage = () => {
        if (currentPage === 0 && !flipping) {
            // Closing cover animation with improved timing
            setFlipping(true);
            if (coverRef.current) {
                coverRef.current.classList.add('page-turning');
                coverRef.current.style.transition = 'transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
                coverRef.current.style.transform = 'rotateY(0deg)';

                setTimeout(() => {
                    setCurrentPage(-1);
                    setFlipping(false);
                    coverRef.current.classList.remove('page-turning');
                }, 1200);
            }
        } else if (currentPage > 0 && !flipping) {
            setFlipping(true);
            setFlipDirection('left');

            const pageEl = pageRefs.current[currentPage - 1];
            if (pageEl) {
                // Use the enhanced animation with cubic-bezier easing
                pageEl.style.animation = `${flipLeft} 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards`;
                pageEl.style.zIndex = pages.length + 5;

                // Add shadow during animation for 3D effect
                const shadowEl = document.createElement('div');
                shadowEl.className = 'page-shadow';
                shadowEl.style.position = 'absolute';
                shadowEl.style.left = '0';
                shadowEl.style.top = '0';
                shadowEl.style.width = '100%';
                shadowEl.style.height = '100%';
                shadowEl.style.background = 'linear-gradient(to right, rgba(0,0,0,0.2), transparent)';
                shadowEl.style.pointerEvents = 'none';
                shadowEl.style.zIndex = pages.length + 4;
                shadowEl.style.opacity = '0';
                shadowEl.style.animation = 'shadowFade 1.2s ease-in-out';

                // Append and remove shadow element
                bookRef.current.appendChild(shadowEl);

                setTimeout(() => {
                    setCurrentPage(currentPage - 1);
                    setFlipping(false);
                    if (bookRef.current.contains(shadowEl)) {
                        bookRef.current.removeChild(shadowEl);
                    }
                }, 1200);
            }
        }
    };



    // Toggle mở/đóng sách
    const toggleBook = () => {
        setFlipping(true);
        if (bookOpen) {
            // Đóng sách
            if (coverRef.current) {
                coverRef.current.style.transform = 'rotateY(0deg)';
                setTimeout(() => {
                    setBookOpen(false);
                    setCurrentPage(-1);
                    setFlipping(false);
                }, 1000);
            }
        } else {
            // Mở sách
            if (coverRef.current) {
                coverRef.current.style.transform = 'rotateY(-180deg)';
                setTimeout(() => {
                    setBookOpen(true);
                    setCurrentPage(0);
                    setFlipping(false);
                }, 1000);
            }
        }
    };

    const getRef = (el, index) => {
        pageRefs.current[index] = el;
    };

    const additionalKeyframes = `
    @keyframes shadowFade {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    `;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                my: 6,
            }}
        >
            {/* Tiêu đề sách */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    cursor: 'pointer'
                }}
                onClick={toggleBook}
            >
                <MenuBookIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" color="primary.main" fontWeight={600}>
                    {title}
                </Typography>
            </Box>

            {/* Container chứa sách */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: bookWidth,
                    height: 500,
                    display: 'flex',
                    justifyContent: 'center',
                    perspective: '2000px',
                    mb: 5,
                }}
            >
                {/* Khung sách 3D */}
                <Paper
                    ref={bookRef}
                    elevation={5}
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(5deg)',
                        transition: 'transform 0.5s ease',
                        borderRadius: 2,
                        overflow: 'visible',
                        '&:hover': {
                            transform: 'rotateX(8deg)',
                        },
                    }}
                >
                    {/* Bìa trước sách da */}
                    <Paper
                        ref={coverRef}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'left',
                            transition: 'transform 1s ease',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            zIndex: pages.length + 3,
                            borderRadius: '8px 2px 2px 8px',
                            background: `
                linear-gradient(145deg, #772f1a 0%, #5a1a0b 100%)
              `,
                            boxShadow: '5px 5px 15px rgba(0,0,0,0.4)',
                            overflow: 'hidden',
                            '&::before': {
                                // Hiệu ứng da vân nổi
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")
                `,
                                opacity: 0.8,
                            },
                            '&::after': {
                                // Viền và trang trí bìa sách
                                content: '""',
                                position: 'absolute',
                                left: '5%',
                                top: '5%',
                                width: '90%',
                                height: '90%',
                                border: '2px solid rgba(255, 193, 7, 0.3)',
                                boxSizing: 'border-box',
                                borderRadius: 1,
                            }
                        }}
                    >
                        {/* Nội dung bìa sách */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 4,
                                color: 'rgba(255, 193, 7, 0.8)',
                                fontFamily: 'serif',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    mb: 4,
                                    fontFamily: 'serif',
                                    color: 'rgba(255, 193, 7, 0.8)',
                                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                                    letterSpacing: '1px',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -10,
                                        left: '25%',
                                        width: '50%',
                                        height: 1,
                                        bgcolor: 'rgba(255, 193, 7, 0.4)'
                                    }
                                }}
                            >
                                {title}
                            </Typography>

                            <Box sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                bgcolor: 'rgba(255, 193, 7, 0.1)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid rgba(255, 193, 7, 0.3)',
                                mb: 4
                            }}>
                                <MenuBookIcon sx={{ fontSize: 40, color: 'rgba(255, 193, 7, 0.8)' }} />
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontStyle: 'italic',
                                    textAlign: 'center',
                                    color: 'rgba(255, 193, 7, 0.7)',
                                    fontFamily: 'serif',
                                }}
                            >
                                Ấn vào đây để mở sách
                            </Typography>
                        </Box>

                        {/* Mặt trong của bìa sách */}
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                backgroundColor: '#e9e1d4',
                                backgroundImage: `
                  linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, rgba(0,0,0,0.05) 100%),
                  linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, rgba(0,0,0,0.05) 100%)
                `,
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                                borderLeft: '1px solid rgba(0,0,0,0.1)',
                            }}
                        >
                            {/* Trang lót bìa */}
                            <Box sx={{
                                position: 'absolute',
                                width: '97%',
                                height: '97%',
                                left: '1.5%',
                                top: '1.5%',
                                backgroundColor: '#f0ebe1',
                                backgroundImage: 'radial-gradient(ellipse at center, #f4f1e8 0%, #e8e0d0 100%)',
                                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                                borderRadius: 1,
                                border: '1px solid rgba(139, 69, 19, 0.1)',
                            }}>
                                {/* Trang trống lót bìa */}
                            </Box>
                        </Box>
                    </Paper>

                    {/* Gáy sách */}
                    <Box
                        sx={{
                            position: 'absolute',
                            width: 40,
                            height: '100%',
                            left: -20,
                            top: 0,
                            background: 'linear-gradient(90deg, #5a1a0b 0%, #772f1a 50%, #5a1a0b 100%)',
                            transform: 'rotateY(90deg)',
                            transformOrigin: 'right',
                            borderRadius: '8px 0 0 8px',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)',
                            zIndex: -1,
                            '&::before': {
                                // Trang trí gáy sách
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '10%',
                                width: '100%',
                                height: '80%',
                                borderTop: '2px solid rgba(255, 193, 7, 0.2)',
                                borderBottom: '2px solid rgba(255, 193, 7, 0.2)',
                            },
                            '&::after': {
                                // Chữ dọc trên gáy sách
                                content: `"${title}"`,
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'rgba(255, 193, 7, 0.7)',
                                fontFamily: 'serif',
                                fontWeight: 700,
                                fontSize: '16px',
                                transform: 'rotate(-90deg)',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                letterSpacing: '2px',
                                whiteSpace: 'nowrap',
                            }
                        }}
                    />

                    {/* Các trang sách */}
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
                                WebkitBackfaceVisibility: 'hidden',
                                transformOrigin: index < currentPage ? 'left center' : 'right center',
                                transform: index < currentPage ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                                transition: flipping ? 'none' : 'transform 0.5s ease',
                                display: (index === currentPage || index === currentPage - 1 || index === currentPage + 1) ? 'block' : 'none',
                                zIndex: pages.length - Math.abs(index - currentPage),
                                backgroundColor: '#fbfbf8', // Màu giấy
                                boxShadow: index === currentPage ? '5px 5px 20px rgba(0,0,0,0.2)' : 'none',
                                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.02) 100%),
                  repeating-linear-gradient(rgba(0,0,0,0.01) 0px, rgba(0,0,0,0.01) 1px, transparent 1px, transparent 25px)
                `,
                                '&::after': {
                                    // Vân giấy
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0) 98%, rgba(0,0,0,0.03) 99%)',
                                    backgroundSize: '10px 10px',
                                    backgroundRepeat: 'repeat',
                                    opacity: 0.3,
                                    pointerEvents: 'none',
                                }
                            }}
                        >
                            {/* Nội dung trang */}
                            <Box
                                sx={{
                                    height: '100%',
                                    padding: { xs: 2, sm: 4 },
                                    overflow: 'auto',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    backgroundImage: index % 2 === 0 ?
                                        'linear-gradient(to left, rgba(0,0,0,0.03) 0px, transparent 4px)' :
                                        'linear-gradient(to right, rgba(0,0,0,0.03) 0px, transparent 4px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxSizing: 'border-box',
                                    // Hiện số trang
                                    '&::after': {
                                        content: `"${index + 1}"`,
                                        position: 'absolute',
                                        bottom: '10px',
                                        [index % 2 === 0 ? 'right' : 'left']: '20px',
                                        fontSize: '12px',
                                        color: 'text.secondary',
                                        fontStyle: 'italic'
                                    }
                                }}
                            >
                                {page}
                            </Box>

                            {/* Hiệu ứng bóng góc trang */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    [flipDirection === 'right' ? 'right' : 'left']: 0,
                                    width: '50px',
                                    height: '50px',
                                    pointerEvents: 'none',
                                    background: flipping ?
                                        `radial-gradient(circle at ${flipDirection === 'right' ? 'top left' : 'top right'}, rgba(0,0,0,0.1) 0%, transparent 70%)` :
                                        'none',
                                    opacity: flipping ? 1 : 0,
                                    transition: 'opacity 0.5s',
                                    borderRadius: '50%',
                                    transform: 'translate(10px, 10px)',
                                    zIndex: 2
                                }}
                            />
                        </Card>
                    ))}

                    {/* Bìa sau sách */}
                    <Paper
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#772f1a',
                            borderRadius: '2px 8px 8px 2px',
                            backgroundImage: `
                linear-gradient(145deg, #772f1a 0%, #5a1a0b 100%)
              `,
                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                            zIndex: 0,
                            '&::before': {
                                // Hiệu ứng da vân nổi giống bìa trước
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")
                `,
                                opacity: 0.8,
                            },
                            '&::after': {
                                // Viền và trang trí bìa sau
                                content: '""',
                                position: 'absolute',
                                left: '5%',
                                top: '5%',
                                width: '90%',
                                height: '90%',
                                border: '2px solid rgba(255, 193, 7, 0.3)',
                                boxSizing: 'border-box',
                                borderRadius: 1,
                            }
                        }}
                    >
                        {/* Trang trong của bìa sau */}
                        <Box sx={{
                            position: 'absolute',
                            width: '97%',
                            height: '97%',
                            left: '1.5%',
                            top: '1.5%',
                            backgroundColor: '#f0ebe1',
                            backgroundImage: 'radial-gradient(ellipse at center, #f4f1e8 0%, #e8e0d0 100%)',
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                            borderRadius: 1,
                            border: '1px solid rgba(139, 69, 19, 0.1)',
                            display: 'none' // Ẩn đi khi nhìn từ ngoài
                        }} />
                    </Paper>

                    {/* Cạnh trang sách (phần đầu trang) */}
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: 10,
                            left: 0,
                            top: -5,
                            transform: 'rotateX(90deg)',
                            transformOrigin: 'bottom',
                            backgroundColor: '#e9e9e9',
                            background: 'linear-gradient(to right, #e0e0e0, #f0f0f0, #e0e0e0)',
                            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)',
                            zIndex: -1,
                        }}
                    />

                    {/* Hiệu ứng góc trang khi hover */}
                    {currentPage < pages.length - 1 && currentPage >= 0 && (
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: '50px',
                                height: '50px',
                                pointerEvents: 'none',
                                background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.03) 50%)',
                                borderTopLeftRadius: '5px',
                                zIndex: pages.length + 2,
                                animation: !flipping ? `${pageTurnShadow} 2s infinite` : 'none',
                                display: flipping ? 'none' : 'block'
                            }}
                        />
                    )}
                </Paper>

                {/* Nút lật trang - Trái */}
                <IconButton
                    onClick={handlePrevPage}
                    disabled={(currentPage === -1) || flipping}
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
                        opacity: (currentPage === -1) ? 0.5 : 1,
                        boxShadow: 3,
                        transition: 'all 0.3s ease',
                        zIndex: pages.length + 10
                    }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>

                {/* Nút lật trang - Phải */}
                <IconButton
                    onClick={handleNextPage}
                    disabled={(currentPage === pages.length - 1) || flipping}
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
                        opacity: (currentPage === pages.length - 1) ? 0.5 : 1,
                        boxShadow: 3,
                        transition: 'all 0.3s ease',
                        zIndex: pages.length + 10
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>

            {/* Số trang hiện tại */}
            <Typography
                variant="body2"
                sx={{
                    color: 'text.secondary',
                    fontStyle: 'italic'
                }}
            >
                {currentPage >= 0 ? `Trang ${currentPage + 1} / ${pages.length}` : 'Bìa sách'}
            </Typography>
        </Box>
    );
};

export default FlipBook;
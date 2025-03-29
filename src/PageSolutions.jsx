import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    useTheme,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Button,
    Divider,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    IconButton,
    Collapse,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FactoryIcon from '@mui/icons-material/Factory';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MouseTrail from './MouseTrail';
import { Link as RouterLink } from 'react-router';

export const PageSolutions = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [expandedCards, setExpandedCards] = useState({});
    const [scrollPosition, setScrollPosition] = useState(0);

    // Xử lý scroll để tạo hiệu ứng parallax
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Xử lý mở rộng/thu gọn thẻ
    const handleExpandClick = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Danh sách các giải pháp
    const solutions = [
        {
            id: 'solution-1',
            title: 'Hoàn thiện đường lối',
            icon: <ModeEditIcon />,
            description: 'Việt Nam đã hoàn thiện đường lối đối ngoại và chính sách hội nhập kinh tế qua các văn kiện nghị quyết và quyết sách từ Đại hội Đảng, như các Nghị quyết Hội nhập quốc tế của Đảng. Điều này giúp xác lập mục tiêu "chủ động hội nhập – bảo đảm độc lập, tự chủ".',
            image: 'https://media.vietnamplus.vn/images/e961bbe9873c476a4ec7ba9573ac235632f5b4f1b62161a5149f6c96083aa297c1bf025007ee3cfa8a1af774ce40cb9fcd300290d34152df2fefb470c1d8c868053e171119d1a20bf2c9b7b2fb00fd59/viet-nam-trung-quoc-5529.jpg.webp',
            achievements: [
                'Xây dựng và ban hành các Nghị quyết về hội nhập quốc tế',
                'Cập nhật đường lối đối ngoại phù hợp với diễn biến toàn cầu',
                'Khẳng định chủ trương "độc lập, tự chủ" trong quyết sách',
                'Đảm bảo các cam kết quốc tế luôn bảo vệ lợi ích quốc gia'
            ],
            details: 'Ngay khi ký kết các hiệp định quốc tế, Việt Nam đã nhanh chóng cập nhật đường lối đối ngoại của mình để phù hợp với diễn biến toàn cầu. Điều này khẳng định chủ trương "độc lập, tự chủ" trong quyết sách, đảm bảo rằng các cam kết quốc tế luôn bảo vệ lợi ích quốc gia và không bị ảnh hưởng bởi áp lực từ bên ngoài.',
            background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.05) 0%, rgba(211, 47, 47, 0.01) 100%)'
        },
        {
            id: 'solution-2',
            title: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa',
            icon: <FactoryIcon />,
            description: 'Việt Nam đã tăng cường đầu tư vào R&D, chuyển dịch cơ cấu sản xuất sang công nghệ cao và tái cấu trúc nền kinh tế. Các dự án hiện đại hóa sản xuất và nâng cấp hạ tầng đã được triển khai, giúp nâng cao năng lực cạnh tranh của doanh nghiệp nội địa.',
            image: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/2/16/dien-tu-binh-minh-1-103674.jpg?width=0&s=4dcRCiysmw2sbYL2yitJBw',
            achievements: [
                'Tăng tỷ lệ đầu tư R&D lên đến 0,7% GDP',
                'Triển khai cơ chế ưu đãi mới cho doanh nghiệp đầu tư vào đổi mới sáng tạo',
                'Tổng chi R&D đạt 250 triệu USD vào năm 2025 - tăng 58% so với năm 2021',
                'Chi tiêu R&D từ các dự án tại khu công nghệ cao chiếm 47% tổng chi tư nhân cho R&D của TP.HCM'
            ],
            details: 'Tỷ lệ đầu tư R&D của Việt Nam hiện chỉ đạt khoảng 0,7% GDP, thấp hơn nhiều so với Trung Quốc (2,68% GDP), cho thấy tiềm năng chưa được khai thác hết và nhu cầu cấp bách phải tăng cường đầu tư vào R&D để tạo ra đột phá công nghệ. Với cơ chế ưu đãi mới, doanh nghiệp giờ đây có thể trích giảm chi phí cho hoạt động R&D lên đến 10–20 lần so với trước đây.',
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255, 193, 7, 0.01) 100%)'
        },
        {
            id: 'solution-3',
            title: 'Tăng cường quan hệ kinh tế đối ngoại và hội nhập quốc tế',
            icon: <PublicIcon />,
            description: 'Việt Nam đã thành công trong việc xây dựng quan hệ đối tác với nhiều nước lớn và tổ chức quốc tế khác nhau (như Mỹ, Trung Quốc, EU, Nga, Nhật Bản, ASEAN) thay vì phụ thuộc vào một đối tác duy nhất. Chiến lược "đa phương hóa, đa dạng hóa" giúp Việt Nam tránh bị lệ thuộc quá mức vào bất kỳ nền kinh tế nào.',
            image: 'https://nld.mediacdn.vn/291774122806476800/2024/10/12/img6424-17192311635731095987289-17287054725601108946621.jpg',
            achievements: [
                'Ký kết và triển khai nhiều Hiệp định Thương mại Tự do (FTA)',
                'Thiết lập quan hệ đối tác chiến lược toàn diện với 12 quốc gia',
                'Tạo cân bằng trong quan hệ kinh tế-chính trị quốc tế',
                'Giảm phụ thuộc vào một thị trường duy nhất'
            ],
            details: 'Tới năm 2025 đã có 12 nước có quan hệ đối tác chiến lược toàn diện với Việt Nam là: Trung Quốc (2008); Nga (2012); Ấn Độ (2016); Hàn Quốc (2022); Hoa Kỳ (09/2023); Nhật Bản (11/2023); Úc (03/2024); Pháp (10/2024); Malaysia (11/2024); New Zealand (02/2025); Indonesia (10/03/2025); và Singapore (12/03/2025).',
            background: 'linear-gradient(135deg, rgba(0, 150, 136, 0.05) 0%, rgba(0, 150, 136, 0.01) 100%)'
        },
        {
            id: 'solution-4',
            title: 'Nâng cao năng lực cạnh tranh',
            icon: <TrendingUpIcon />,
            description: 'Việt Nam đã cải cách thể chế, đổi mới hành chính và đẩy mạnh ứng dụng khoa học công nghệ trong sản xuất và quản lý doanh nghiệp. Điều này được thúc đẩy qua các chương trình đào tạo nguồn nhân lực chất lượng cao, giúp doanh nghiệp nội địa nâng cao năng lực cạnh tranh.',
            image: 'https://www.tapchicongsan.org.vn/documents/20182/190506806/vna_potal_thu_tuong_pham_minh_chinh_tham_san_giao_dich_chung_khoan_new_york__6114291.jpeg/cfd84f6f-d009-475c-ab7a-d61ce08a29ac?t=1655527771488',
            achievements: [
                'Cải cách thể chế và đổi mới hành chính',
                'Đẩy mạnh ứng dụng khoa học công nghệ',
                'Phát triển nguồn nhân lực chất lượng cao',
                'Thu hút FDI và chuyển giao công nghệ'
            ],
            details: 'Trong bối cảnh chuyến thăm của Thủ tướng Trung Quốc tại Hà Nội vào tháng 10/2024, Việt Nam và Trung Quốc đã ký kết 10 văn bản hợp tác, trong đó có các hiệp định thúc đẩy chuyển giao công nghệ và nâng cao năng lực cạnh tranh của doanh nghiệp Việt. Theo Reuters, các văn bản này tập trung vào hợp tác trong lĩnh vực nông sản, phát triển hạ tầng và hiện đại hóa hệ thống thanh toán qua QR code.',
            background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.05) 0%, rgba(63, 81, 181, 0.01) 100%)'
        },
        {
            id: 'solution-5',
            title: 'Kết hợp kinh tế với quốc phòng, an ninh và đối ngoại',
            icon: <SecurityIcon />,
            description: 'Việt Nam đã khéo léo kết hợp phát triển kinh tế với chính sách quốc phòng, an ninh và đối ngoại thông qua các chuyến thăm cấp cao và thiết lập cơ chế đối thoại song phương, đặc biệt trong lĩnh vực an ninh và quốc phòng.',
            image: 'https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/1/19/15a8b165e349473d89fe6638fdad99fb',
            achievements: [
                'Tổ chức các chuyến thăm cấp cao để duy trì đối thoại',
                'Thiết lập cơ chế đối thoại song phương trong lĩnh vực an ninh, quốc phòng',
                'Xây dựng "lũy tre biên thùy" như rào cản phi quân sự',
                'Kết hợp giữa kinh tế và chính trị trong bảo vệ chủ quyền'
            ],
            details: 'Trên biên giới với Trung Quốc, khi mối quan hệ ngày càng phức tạp và ranh giới trở nên mềm dẻo, mô hình "lũy tre biên thùy" được áp dụng như một rào cản phi quân sự. Việc xây dựng "lũy tre biên thùy" thể hiện sự khéo léo trong việc sử dụng biện pháp hòa bình, thân thiện để khẳng định chủ quyền, đồng thời tránh gây căng thẳng trong quan hệ quốc tế.',
            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.01) 100%)'
        }
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <MouseTrail />
            <Box
                sx={{
                    py: 6,
                    background: '#f5f5f5',
                    minHeight: '100vh',
                    backgroundImage: `linear-gradient(rgba(245, 245, 245, 0.9), rgba(245, 245, 245, 0.9)), url(https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/1/19/15a8b165e349473d89fe6638fdad99fb)`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}
            >
                <Container maxWidth="lg">
                    {/* Tiêu đề */}
                    <Box
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            transform: `translateY(${Math.min(0, scrollPosition / 10 - 20)}px)`,
                            opacity: scrollPosition > 0 ? 1 : 0.95,
                            transition: 'transform 0.3s ease, opacity 0.3s ease'
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.dark,
                                mb: 2
                            }}
                        >
                            <LightbulbIcon sx={{ fontSize: 40, verticalAlign: 'middle', mr: 2 }} />
                            Giải Pháp Hội Nhập Và Độc Lập Tự Chủ
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}
                        >
                            Những điều nên làm để vừa đảm bảo hội nhập quốc tế hiệu quả vừa giữ vững độc lập, tự chủ quốc gia
                        </Typography>
                    </Box>

                    {/* Giới thiệu */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 6,
                            borderRadius: 2,
                            bgcolor: 'rgba(255, 255, 255, 0.9)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            transform: `translateY(${Math.min(0, scrollPosition / 8 - 30)}px)`,
                            opacity: scrollPosition > 0 ? 1 : 0.95,
                            transition: 'transform 0.5s ease, opacity 0.5s ease'
                        }}
                    >
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8
                            }}
                        >
                            Để vừa hội nhập hiệu quả, vừa bảo đảm độc lập, tự chủ, Việt Nam đã triển khai nhiều giải pháp toàn diện.
                            Các giải pháp này vừa giúp tận dụng lợi thế của hội nhập quốc tế, vừa khẳng định được chủ quyền quốc gia,
                            tạo nền tảng cho một nền kinh tế phát triển bền vững và một vị thế vững chắc trên trường quốc tế.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                fontWeight: 500,
                                color: theme.palette.primary.main
                            }}
                        >
                            Dưới đây là các giải pháp chính Việt Nam đã triển khai thành công:
                        </Typography>
                    </Paper>

                    {/* Các giải pháp chính */}
                    <Box sx={{ mb: 6 }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {solutions.map((solution, index) => (
                                <Step key={solution.id}>
                                    <StepLabel
                                        StepIconProps={{
                                            icon: solution.icon,
                                            style: { color: activeStep >= index ? theme.palette.primary.main : theme.palette.grey[400] }
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            sx={{
                                                color: activeStep >= index ? 'text.primary' : 'text.secondary'
                                            }}
                                        >
                                            {solution.title}
                                        </Typography>
                                    </StepLabel>
                                    <StepContent>
                                        <Card
                                            sx={{
                                                mb: 2,
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                                background: solution.background
                                            }}
                                        >
                                            <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
                                                <CardMedia
                                                    component="img"
                                                    image={solution.image}
                                                    alt={solution.title}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                                        p: 2,
                                                        color: 'white'
                                                    }}
                                                >
                                                    <Typography variant="h5" fontWeight={600}>
                                                        {solution.title}
                                                    </Typography>
                                                    <Chip
                                                        label={`Giải pháp ${index + 1}/5`}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: 'rgba(255,255,255,0.3)',
                                                            color: 'white',
                                                            mt: 1
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                            <CardContent sx={{ p: 3 }}>
                                                <Typography variant="body1" paragraph>
                                                    {solution.description}
                                                </Typography>

                                                <Divider sx={{ my: 2 }} />

                                                <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                                                    Thành tựu đạt được:
                                                </Typography>

                                                <List>
                                                    {solution.achievements.map((achievement, idx) => (
                                                        <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                                <CheckCircleOutlineIcon fontSize="small" color="primary" />
                                                            </ListItemIcon>
                                                            <ListItemText primary={achievement} />
                                                        </ListItem>
                                                    ))}
                                                </List>

                                                <Divider sx={{ my: 2 }} />

                                                <Typography variant="body1" paragraph>
                                                    {solution.details}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Quay lại
                                            </Button>
                                            <Button
                                                variant="contained"
                                                onClick={index === solutions.length - 1 ? handleReset : handleNext}
                                                sx={{
                                                    backgroundColor: index === solutions.length - 1 ? theme.palette.success.main : theme.palette.primary.main
                                                }}
                                            >
                                                {index === solutions.length - 1 ? 'Xem lại từ đầu' : 'Tiếp theo'}
                                            </Button>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

                    {/* Kết luận */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 6,
                            borderRadius: 2,
                            bgcolor: theme.palette.primary.main,
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Typography variant="h5" gutterBottom fontWeight={600}>
                                    Kết Luận
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Giữ độc lập, tự chủ trong hội nhập quốc tế còn có nghĩa là vừa hợp tác vừa đấu tranh – đấu tranh giúp
                                    cho hợp tác tốt hơn. Qua đó, Việt Nam sẽ tận dụng được lợi thế của hội nhập toàn cầu, đồng thời khẳng định
                                    được chủ quyền, tạo nền tảng cho một nền kinh tế phát triển bền vững và một vị thế vững chắc trên trường quốc tế.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/achievements"
                                    endIcon={<EmojiEventsIcon />}
                                    sx={{
                                        bgcolor: 'white',
                                        color: theme.palette.primary.main,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 600,
                                        '&:hover': {
                                            bgcolor: '#f5f5f5'
                                        }
                                    }}
                                >
                                    Xem Thành Tựu
                                </Button>
                            </Grid>
                        </Grid>

                        {/* Biểu tượng trang trí */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -40,
                                right: -30,
                                opacity: 0.1,
                                transform: 'rotate(10deg)'
                            }}
                        >
                            <LightbulbIcon sx={{ fontSize: 140 }} />
                        </Box>
                    </Paper>

                    {/* Danh sách thẻ giải pháp */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                display: 'inline-block',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '60%',
                                    height: 3,
                                    bottom: -8,
                                    left: '20%',
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5
                                }
                            }}
                        >
                            Bảng Tổng Hợp Giải Pháp
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mt: 3 }}>
                            Nhấp vào mỗi giải pháp để xem chi tiết nội dung và các thành tựu đã đạt được
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {solutions.map((solution, index) => (
                            <Grid item xs={12} md={6} key={solution.id}>
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        height: '100%',
                                        background: solution.background,
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardActionArea
                                        onClick={() => setActiveStep(index)}
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                                    >
                                        <Box sx={{ position: 'relative', width: '100%', height: 180 }}>
                                            <CardMedia
                                                component="img"
                                                image={solution.image}
                                                alt={solution.title}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexDirection: 'column',
                                                    textAlign: 'center',
                                                    px: 2
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        bgcolor: 'white',
                                                        color: theme.palette.primary.main,
                                                        width: 60,
                                                        height: 60,
                                                        mb: 1
                                                    }}
                                                >
                                                    {solution.icon}
                                                </Avatar>
                                                <Typography variant="h6" component="div" color="white" textAlign="center" fontWeight={600}>
                                                    {solution.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, flexGrow: 1 }}>
                                                {solution.description.slice(0, 120)}...
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
                                                <Button
                                                    endIcon={<ArrowForwardIcon />}
                                                    color="primary"
                                                >
                                                    Xem chi tiết
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default PageSolutions;
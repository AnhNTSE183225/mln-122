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
    Button,
    Avatar,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MouseTrail from './MouseTrail';
import { Link as RouterLink } from 'react-router';

export const PageChallenges = () => {
    const theme = useTheme();
    const [animateItems, setAnimateItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Hiệu ứng xuất hiện dần các thành phần
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setAnimateItems(prev => [...prev, entry.target.id]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const targets = document.querySelectorAll('.animate-item');
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    const isAnimated = (id) => animateItems.includes(id);

    // Danh sách các thách thức
    const challenges = [
        {
            id: 'challenge-1',
            title: 'Sự lệ thuộc',
            icon: <MonetizationOnIcon />,
            description: 'Sự tùy thuộc lẫn nhau giữa các quốc gia có thể dẫn đến sự lệ thuộc, đặc biệt đối với các nước nghèo, nước nhỏ trong quan hệ với các nước giàu, nước lớn.',
            image: 'https://static.kinhtedothi.vn/w960/images/upload/2024/09/17/u21918-slide-8881.jpg',
            details: [
                'Phụ thuộc vào thị trường xuất khẩu của các nước lớn',
                'Phụ thuộc về công nghệ và vốn đầu tư',
                'Bị chi phối bởi các tập đoàn xuyên quốc gia',
                'Phụ thuộc vào nguyên liệu và chuỗi cung ứng toàn cầu'
            ],
            backgroundColor: 'rgba(211, 47, 47, 0.04)',
            borderColor: 'rgba(211, 47, 47, 0.1)'
        },
        {
            id: 'challenge-2',
            title: 'Phân hóa xã hội',
            icon: <PeopleIcon />,
            description: 'Lợi ích từ hội nhập có thể phân chia không đồng đều, làm gia tăng phân hóa xã hội và các vấn đề xã hội.',
            image: 'https://hdll.vn/FileUpload/Images/laodongvieclam.jpg',
            details: [
                'Khoảng cách giàu nghèo gia tăng giữa các nhóm dân cư',
                'Bất bình đẳng trong tiếp cận cơ hội việc làm và nguồn lực',
                'Gia tăng bất bình đẳng giữa các vùng miền',
                'Xói mòn các giá trị truyền thống và bản sắc văn hóa'
            ],
            backgroundColor: 'rgba(255, 193, 7, 0.04)',
            borderColor: 'rgba(255, 193, 7, 0.1)'
        },
        {
            id: 'challenge-3',
            title: 'Lợi ích nhóm',
            icon: <GroupsIcon />,
            description: 'Lợi ích nhóm có thể chi phối quá trình ra quyết định, đặc biệt khi có sự liên kết với các yếu tố nước ngoài.',
            image: 'https://file.qdnd.vn/data/images/0/2020/07/01/phucthang/nhom-loi-ich-dang-dua-dat-nuoc-dung-truoc-nhung-nguy-co-kho-luong.jpg?dpi=150&quality=100&w=575',
            details: [
                'Các nhóm lợi ích can thiệp vào quá trình hoạch định chính sách',
                'Ưu tiên lợi ích cục bộ hơn lợi ích quốc gia',
                'Hiện tượng tham nhũng, hối lộ trong quan hệ quốc tế',
                'Mất cân bằng trong các chính sách phát triển'
            ],
            backgroundColor: 'rgba(63, 81, 181, 0.04)',
            borderColor: 'rgba(63, 81, 181, 0.1)'
        },
        {
            id: 'challenge-4',
            title: 'Suy giảm chủ quyền',
            icon: <SecurityIcon />,
            description: 'Hội nhập không hiệu quả có thể làm suy giảm độc lập, tự chủ và chủ quyền quốc gia.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboHmdKFupWUmEMqqzb-EBpX_MY1mdst4pCg&s',
            details: [
                'Giảm khả năng kiểm soát các chính sách kinh tế',
                'Áp lực từ các tổ chức quốc tế và hiệp định thương mại',
                'Ảnh hưởng của các cường quốc lên chủ quyền quốc gia',
                'Bị ràng buộc bởi các cam kết quốc tế'
            ],
            backgroundColor: 'rgba(0, 150, 136, 0.04)',
            borderColor: 'rgba(0, 150, 136, 0.1)'
        },
        {
            id: 'challenge-5',
            title: 'Quan niệm cứng nhắc',
            icon: <CategoryIcon />,
            description: 'Tuyệt đối hóa hoặc quan niệm cứng nhắc về độc lập, tự chủ sẽ ngăn cản hội nhập, bỏ lỡ thời cơ.',
            image: 'https://s-aicmscdn.vietnamhoinhap.vn/thumb/w_1000/vnhn-media/21/4/16/ktqt.jpg',
            details: [
                'Khép kín nền kinh tế, từ chối các cơ hội hợp tác',
                'Không chấp nhận các thay đổi cần thiết để thích ứng',
                'Mất cơ hội tiếp cận thị trường và công nghệ mới',
                'Tư duy bảo thủ, thiếu linh hoạt trong đối ngoại'
            ],
            backgroundColor: 'rgba(216, 67, 21, 0.04)',
            borderColor: 'rgba(216, 67, 21, 0.1)'
        }
    ];

    return (
        <>
            <MouseTrail />
            <Box
                sx={{
                    py: 6,
                    background: '#f5f5f5',
                    minHeight: '100vh'
                }}
            >
                <Container maxWidth="lg">
                    {/* Tiêu đề chính */}
                    <Box
                        sx={{
                            textAlign: 'center',
                            mb: 6
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
                            <WarningIcon sx={{ fontSize: 40, verticalAlign: 'middle', mr: 2 }} />
                            Thách Thức Của Hội Nhập Quốc Tế
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}
                        >
                            Những khó khăn và thách thức mà Việt Nam phải đối mặt khi hội nhập quốc tế trong việc bảo đảm độc lập, tự chủ
                        </Typography>
                    </Box>

                    {/* Giới thiệu */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 6,
                            borderRadius: 2,
                            bgcolor: '#fff',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(0,0,0,0.05)'
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
                            Khi Việt Nam ngày càng hội nhập sâu rộng vào nền kinh tế toàn cầu, mặc dù thu được nhiều thành tựu to lớn,
                            nhưng cũng đối mặt với không ít thách thức trong việc duy trì nền kinh tế độc lập, tự chủ.
                            Nếu không chủ động, sáng tạo tìm ra những phương thức mới phù hợp với hoàn cảnh và các điều kiện
                            hình thành từ quá trình hội nhập quốc tế, thì việc bảo đảm độc lập, tự chủ cũng sẽ gặp nhiều khó khăn.
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
                            Dưới đây là các thách thức chính mà Việt Nam phải đối mặt trong quá trình hội nhập quốc tế:
                        </Typography>
                    </Paper>

                    {/* Danh sách thách thức */}
                    <Grid container spacing={4}>
                        {challenges.map((challenge, index) => (
                            <Grid item xs={12} key={challenge.id}>
                                <Card
                                    id={challenge.id}
                                    className="animate-item"
                                    sx={{
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        border: `1px solid ${challenge.borderColor}`,
                                        bgcolor: challenge.backgroundColor,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        transform: isAnimated(challenge.id) ? 'translateY(0)' : 'translateY(50px)',
                                        opacity: isAnimated(challenge.id) ? 1 : 0,
                                        transition: 'transform 0.6s ease, opacity 0.6s ease',
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={5}>
                                            <CardMedia
                                                component="img"
                                                image={challenge.image}
                                                alt={challenge.title}
                                                sx={{
                                                    height: '100%',
                                                    minHeight: 250,
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={7}>
                                            <CardContent sx={{ p: 3, height: '100%' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                    <Avatar
                                                        sx={{
                                                            bgcolor: theme.palette.primary.main,
                                                            mr: 2
                                                        }}
                                                    >
                                                        {challenge.icon}
                                                    </Avatar>
                                                    <Typography variant="h5" component="h2" fontWeight={600}>
                                                        {challenge.title}
                                                    </Typography>
                                                </Box>

                                                <Typography variant="body1" paragraph>
                                                    {challenge.description}
                                                </Typography>

                                                <Divider sx={{ my: 2 }} />

                                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                    Biểu hiện cụ thể:
                                                </Typography>

                                                <List dense>
                                                    {challenge.details.map((detail, idx) => (
                                                        <ListItem key={idx} sx={{ py: 0.5 }}>
                                                            <ListItemIcon sx={{ minWidth: 30 }}>
                                                                <ArrowForwardIcon fontSize="small" color="primary" />
                                                            </ListItemIcon>
                                                            <ListItemText primary={detail} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Kết luận và kêu gọi hành động */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mt: 6,
                            borderRadius: 2,
                            bgcolor: theme.palette.primary.main,
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                                zIndex: 1
                            }
                        }}
                    >
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Typography variant="h5" gutterBottom fontWeight={600} sx={{ position: 'relative', zIndex: 2 }}>
                                    Tìm Hiểu Giải Pháp
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ position: 'relative', zIndex: 2 }}>
                                    Mặc dù đối mặt với nhiều thách thức, Việt Nam đã đưa ra nhiều giải pháp sáng tạo để vừa
                                    tận dụng cơ hội từ hội nhập quốc tế, vừa bảo đảm độc lập, tự chủ của đất nước.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/solutions"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        bgcolor: 'white',
                                        color: theme.palette.primary.main,
                                        px: 3,
                                        py: 1.5,
                                        fontWeight: 600,
                                        '&:hover': {
                                            bgcolor: '#f5f5f5'
                                        },
                                        position: 'relative',
                                        zIndex: 2
                                    }}
                                >
                                    Khám Phá Giải Pháp
                                </Button>
                            </Grid>
                        </Grid>

                        {/* Biểu tượng trang trí */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: -20,
                                right: -20,
                                opacity: 0.1,
                                zIndex: 1
                            }}
                        >
                            <ImportExportIcon sx={{ fontSize: 120 }} />
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -20,
                                left: -20,
                                opacity: 0.1,
                                zIndex: 1
                            }}
                        >
                            <LockIcon sx={{ fontSize: 100 }} />
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default PageChallenges;
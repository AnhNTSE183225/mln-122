import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    useTheme,
    LinearProgress
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import MouseTrail from './MouseTrail';

export const PageAchievements = () => {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Dữ liệu thành tựu
    const achievementData = [
        {
            category: "GDP và Thu Nhập Bình Quân",
            icon: <MonetizationOnIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
            color: theme.palette.primary.main,
            items: [
                {
                    label: "Quy mô GDP năm 2023",
                    value: "430 tỷ USD",
                    subtext: "Tăng hơn 95 lần so với năm 1986"
                },
                {
                    label: "Thu nhập bình quân đầu người năm 2023",
                    value: "4.300 USD",
                    subtext: "Tăng gần 60 lần so với năm 1986"
                }
            ]
        },
        {
            category: "Tăng Trưởng Kinh Tế",
            icon: <ShowChartIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
            color: theme.palette.primary.main,
            items: [
                {
                    label: "Tốc độ tăng trưởng GDP bình quân",
                    value: "6,5%/năm",
                    subtext: "Duy trì mức tăng trưởng cao trong khu vực và trên thế giới"
                }
            ]
        },
        {
            category: "Xuất Nhập Khẩu",
            icon: <TrendingUpIcon sx={{ color: theme.palette.secondary.main, fontSize: 40 }} />,
            color: theme.palette.secondary.main,
            items: [
                {
                    label: "Kim ngạch xuất nhập khẩu năm 2023",
                    value: "681 tỷ USD",
                    subtext: "Với xu thế xuất siêu trong 8 năm liên tiếp"
                },
                {
                    label: "Xuất khẩu gạo năm 2023",
                    value: "8,1 triệu tấn",
                    subtext: "Góp phần bảo đảm an ninh lương thực toàn cầu"
                }
            ]
        },
        {
            category: "Đầu Tư Nước Ngoài (FDI)",
            icon: <AccountBalanceIcon sx={{ color: theme.palette.secondary.main, fontSize: 40 }} />,
            color: theme.palette.secondary.main,
            items: [
                {
                    label: "Thu hút FDI năm 2023",
                    value: "39,4 tỷ USD",
                    subtext: "Vốn thực hiện đạt khoảng 23,2 tỷ USD"
                },
                {
                    label: "Số dự án FDI đang hoạt động",
                    value: "40.800 dự án",
                    subtext: "Tổng số vốn đăng ký khoảng 487 tỷ USD"
                }
            ]
        },
        {
            category: "Hạ Tầng Giao Thông",
            icon: <AirplanemodeActiveIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
            color: theme.palette.primary.main,
            items: [
                {
                    label: "Hệ thống đường cao tốc hoàn thành",
                    value: "2.000 km",
                    subtext: "Mục tiêu đạt trên 3.000 km vào năm 2025"
                },
                {
                    label: "Phát triển hạ tầng",
                    value: "Đang triển khai",
                    subtext: "Các dự án sân bay, cảng biển và đường sắt tốc độ cao"
                }
            ]
        },
        {
            category: "Cải Thiện Đời Sống Xã Hội",
            icon: <HomeIcon sx={{ color: theme.palette.secondary.main, fontSize: 40 }} />,
            color: theme.palette.secondary.main,
            items: [
                {
                    label: "Tỷ lệ hộ nghèo",
                    value: "2,9%",
                    subtext: "Giảm đáng kể so với trước đây"
                },
                {
                    label: "Tuổi thọ trung bình",
                    value: "74,5 tuổi",
                    subtext: "Tăng 9 tuổi so với năm 1993 (65,5 tuổi)"
                },
                {
                    label: "Chỉ số phát triển con người (HDI)",
                    value: "Tăng 11 bậc",
                    subtext: "Từ vị trí 65 lên 54"
                }
            ]
        },
        {
            category: "Quan Hệ Đối Ngoại",
            icon: <PublicIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />,
            color: theme.palette.primary.main,
            items: [
                {
                    label: "Quan hệ ngoại giao",
                    value: "193 quốc gia",
                    subtext: "Trên toàn thế giới"
                },
                {
                    label: "Quan hệ đối tác chiến lược hoặc toàn diện",
                    value: "30 quốc gia",
                    subtext: "Bao gồm các cường quốc và thành viên Hội đồng Bảo an LHQ"
                },
                {
                    label: "Quan hệ đối ngoại của Đảng",
                    value: "253 đảng",
                    subtext: "Tại 115 quốc gia"
                }
            ]
        }
    ];

    return (
        <>
            <MouseTrail />
            <Box sx={{ py: 6, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
                <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                    {/* Tiêu đề */}
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 4,
                            px: 2
                        }}
                    >
                        Những con số ấn tượng thể hiện thành tựu phát triển của đất nước trong thời kỳ đổi mới và hội nhập quốc tế
                    </Typography>

                    {/* Phần giới thiệu */}
                    <Paper
                        elevation={1}
                        sx={{
                            p: 4,
                            mb: 5,
                            borderRadius: 1,
                            bgcolor: '#fff9f9',
                            borderLeft: `4px solid ${theme.palette.primary.main}`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography variant="body1" paragraph>
                            Dưới sự lãnh đạo của đồng chí Tổng Bí thư Nguyễn Phú Trọng, Việt Nam đã đạt được những thành tựu phát triển vượt bậc trên nhiều lĩnh vực. Từ một nền kinh tế lạc hậu, Việt Nam đã trở thành quốc gia có cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.
                        </Typography>
                        <Typography variant="body1">
                            Những con số dưới đây là minh chứng sống động cho sự phát triển toàn diện của đất nước trong bối cảnh hội nhập quốc tế sâu rộng nhưng vẫn giữ vững độc lập, tự chủ.
                        </Typography>

                        {/* Hiệu ứng chấm màu */}
                        <Box
                            sx={{
                                position: 'absolute',
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                bgcolor: theme.palette.primary.main,
                                bottom: 30,
                                right: 30
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: theme.palette.secondary.main,
                                bottom: 70,
                                left: '50%'
                            }}
                        />
                    </Paper>

                    {/* Sử dụng Box thay vì Grid để kiểm soát tốt hơn */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',                  // 1 cột trên mobile
                            sm: 'repeat(2, 1fr)',       // 2 cột trên tablet
                            md: 'repeat(2, 1fr)',       // 2 cột trên desktop nhỏ
                            lg: 'repeat(2, 1fr)'        // 2 cột trên desktop lớn
                        },
                        gap: 3
                    }}>
                        {achievementData.map((category, idx) => (
                            <Paper
                                key={idx}
                                elevation={1}
                                sx={{
                                    p: 3,
                                    borderRadius: 1,
                                    bgcolor: 'white',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Hiệu ứng chấm màu */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        bgcolor: category.color,
                                        top: 20,
                                        right: 20
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        bgcolor: category.color === theme.palette.primary.main ?
                                            theme.palette.secondary.main : theme.palette.primary.main,
                                        bottom: Math.random() * 100 + 20,
                                        right: Math.random() * 100 + 20
                                    }}
                                />

                                {/* Tiêu đề của card */}
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, minHeight: 50 }}>
                                    <Box sx={{ mr: 2, display: 'flex', justifyContent: 'center', width: 45 }}>
                                        {category.icon}
                                    </Box>
                                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                                        {category.category}
                                    </Typography>
                                </Box>

                                {/* Các item trong card */}
                                {category.items.map((item, itemIdx) => (
                                    <Box key={itemIdx} sx={{ mb: itemIdx < category.items.length - 1 ? 3 : 0 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.label}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                color={category.color}
                                            >
                                                {item.value}
                                            </Typography>
                                        </Box>

                                        <LinearProgress
                                            variant="determinate"
                                            value={100}
                                            sx={{
                                                height: 8,
                                                borderRadius: 1,
                                                mb: 1,
                                                bgcolor: '#f0f0f0',
                                                '& .MuiLinearProgress-bar': {
                                                    bgcolor: category.color
                                                }
                                            }}
                                        />

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontStyle: 'italic',
                                                color: 'text.secondary',
                                                ml: 0.5
                                            }}
                                        >
                                            {item.subtext}
                                        </Typography>
                                    </Box>
                                ))}
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default PageAchievements;
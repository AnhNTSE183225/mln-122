import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    useTheme,
    Divider,
    Card,
    CardContent,
    Button
} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MouseTrail from './MouseTrail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router';

export const PageConcepts = () => {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Hiệu ứng scroll
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                    {/* Tiêu đề */}
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
                            <MenuBookIcon sx={{ fontSize: 40, verticalAlign: 'middle', mr: 2 }} />
                            Các Khái Niệm Cơ Bản
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}
                        >
                            Hiểu rõ về biên giới mềm và nền kinh tế độc lập tự chủ trong bối cảnh hội nhập quốc tế
                        </Typography>
                    </Box>

                    {/* Khái niệm Biên giới mềm */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 5,
                            borderRadius: 2,
                            position: 'relative',
                            overflow: 'hidden',
                            background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(211, 47, 47, 0.1)',
                            transform: `translateY(${Math.min(0, scrollY / 10 - 30)}px)`,
                            opacity: scrollY > 0 ? 1 : 0.95,
                            transition: 'transform 0.5s ease, opacity 0.5s ease',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                            <PublicIcon
                                sx={{
                                    fontSize: 56,
                                    color: theme.palette.primary.main,
                                    mr: 3,
                                    mt: 1
                                }}
                            />
                            <Box>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: theme.palette.primary.main,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -8,
                                            left: 0,
                                            width: 100,
                                            height: 3,
                                            bgcolor: theme.palette.primary.light,
                                            borderRadius: 2
                                        }
                                    }}
                                >
                                    Biên Giới Mềm
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    <strong>"Biên giới mềm"</strong> không chỉ đơn giản là ranh giới vật lý mà còn bao hàm các khía cạnh kinh tế, văn hóa và chính trị. Nó thể hiện khả năng một quốc gia mở rộng tầm ảnh hưởng của mình sang các quốc gia khác qua các lĩnh vực mềm – như ngoại giao văn hóa, truyền thông, thương mại – thay vì sử dụng biện pháp quân sự hoặc cưỡng chế.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    Theo Mác – Lênin, sự phát triển của lực lượng sản xuất luôn đi kèm với quá trình xã hội hóa các quan hệ sản xuất. Khi các quốc gia hội nhập sâu rộng, chúng dễ dàng "đan xen" lẫn nhau qua các mối quan hệ kinh tế và văn hóa, từ đó ranh giới giữa các quốc gia trở nên mềm dẻo hơn.
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom color="primary.dark" fontWeight={600}>
                                            Đặc điểm của biên giới mềm
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Tập trung vào ảnh hưởng qua các yếu tố phi vật lý
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Được thực hiện thông qua các hoạt động giao lưu kinh tế, văn hóa, khoa học
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Dựa trên sự kết nối thay vì sự phân chia
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Phát triển song song với quá trình toàn cầu hóa
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom color="primary.dark" fontWeight={600}>
                                            Biểu hiện trong thực tiễn
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Lan tỏa văn hóa đại chúng xuyên biên giới quốc gia
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Mở rộng thương mại và đầu tư quốc tế
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Hình thành các chuỗi cung ứng và sản xuất toàn cầu
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Tăng cường hợp tác chính trị và ngoại giao
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Box
                                component="img"
                                src="https://xdcs.cdnchinhphu.vn/thumb_w/900/446259493575335936/2025/3/4/jhdq81e-17410552484291331023939-35-0-675-1024-crop-1741055259952580166107.png"
                                alt="Biên giới mềm"
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: 400,
                                    borderRadius: 2,
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    my: 2
                                }}
                            />
                        </Box>
                    </Paper>

                    {/* Khái niệm Nền kinh tế độc lập tự chủ */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 5,
                            borderRadius: 2,
                            position: 'relative',
                            overflow: 'hidden',
                            background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 193, 7, 0.1)',
                            transform: `translateY(${Math.min(0, scrollY / 10 - 60)}px)`,
                            opacity: scrollY > 200 ? 1 : 0.95,
                            transition: 'transform 0.5s ease, opacity 0.5s ease',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                            <SecurityIcon
                                sx={{
                                    fontSize: 56,
                                    color: theme.palette.secondary.main,
                                    mr: 3,
                                    mt: 1
                                }}
                            />
                            <Box>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: theme.palette.secondary.dark,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -8,
                                            left: 0,
                                            width: 100,
                                            height: 3,
                                            bgcolor: theme.palette.secondary.light,
                                            borderRadius: 2
                                        }
                                    }}
                                >
                                    Nền Kinh Tế Độc Lập Tự Chủ
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    <strong>Nền kinh tế độc lập, tự chủ</strong> là nền kinh tế không bị lệ thuộc, phụ thuộc vào nước khác, người khác, hoặc vào một tổ chức kinh tế nào đó về đường lối, chính sách phát triển, không để bất kỳ ai dùng các điều kiện kinh tế, tài chính, thương mại, viện trợ... để áp đặt, khống chế, làm tổn hại đến chủ quyền quốc gia và lợi ích cơ bản của dân tộc.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    Xây dựng nền kinh tế độc lập tự chủ không chỉ xuất phát từ quan điểm, đường lối chính trị độc lập tự chủ mà còn là đòi hỏi của thực tiễn, nhằm bảo đảm phát triển bền vững và có hiệu quả cho nền kinh tế, cho việc mở cửa, hội nhập kinh tế quốc tế.
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom color="secondary.dark" fontWeight={600}>
                                            Đặc trưng của nền kinh tế độc lập tự chủ
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Tự chủ về đường lối và chính sách phát triển
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Không bị lệ thuộc vào viện trợ hoặc hỗ trợ từ bên ngoài
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Có khả năng tự bảo đảm các nhu cầu cơ bản
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Chủ động trong quan hệ kinh tế đối ngoại
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom color="secondary.dark" fontWeight={600}>
                                            Yêu cầu để xây dựng nền kinh tế độc lập tự chủ
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Phát triển nội lực của nền kinh tế
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Đa dạng hóa đối tác và thị trường
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Nâng cao năng lực cạnh tranh quốc tế
                                                </Typography>
                                            </Box>
                                            <Box component="li" sx={{ mb: 1 }}>
                                                <Typography variant="body1">
                                                    Chủ động tham gia vào chuỗi giá trị toàn cầu
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Box
                                component="img"
                                src="https://media.vietnamplus.vn/images/e961bbe9873c476a4ec7ba9573ac235632f5b4f1b62161a5149f6c96083aa297c1bf025007ee3cfa8a1af774ce40cb9fcd300290d34152df2fefb470c1d8c868053e171119d1a20bf2c9b7b2fb00fd59/viet-nam-trung-quoc-5529.jpg.webp"
                                alt="Nền kinh tế độc lập tự chủ"
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: 400,
                                    borderRadius: 2,
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    my: 2
                                }}
                            />
                        </Box>
                    </Paper>

                    {/* Mối quan hệ giữa hai khái niệm */}
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            mb: 5,
                            borderRadius: 2,
                            position: 'relative',
                            overflow: 'hidden',
                            background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            transform: `translateY(${Math.min(0, scrollY / 10 - 90)}px)`,
                            opacity: scrollY > 400 ? 1 : 0.95,
                            transition: 'transform 0.5s ease, opacity 0.5s ease',
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                textAlign: 'center',
                                color: 'text.primary',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -8,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 100,
                                    height: 3,
                                    bgcolor: 'text.disabled',
                                    borderRadius: 2
                                }
                            }}
                        >
                            Mối Quan Hệ Giữa Biên Giới Mềm và Nền Kinh Tế Độc Lập Tự Chủ
                        </Typography>

                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ fontSize: '1.1rem', textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 4 }}
                        >
                            Trong bối cảnh hội nhập quốc tế hiện nay, hai khái niệm này có mối quan hệ biện chứng với nhau. Thách thức là làm sao để tận dụng được lợi thế của "biên giới mềm" trong khi vẫn duy trì được nền kinh tế độc lập, tự chủ.
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom fontWeight={600} color="text.primary">
                                            Thách thức
                                        </Typography>
                                        <Typography variant="body1" paragraph>
                                            Khi biên giới ngày càng mềm hóa, sự phụ thuộc lẫn nhau giữa các quốc gia tăng lên, có thể dẫn đến tình trạng lệ thuộc, mất đi tính độc lập, tự chủ của nền kinh tế.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom fontWeight={600} color="text.primary">
                                            Cơ hội
                                        </Typography>
                                        <Typography variant="body1" paragraph>
                                            Biên giới mềm cũng tạo điều kiện để các quốc gia tiếp cận thị trường, nguồn lực và công nghệ mới, giúp tăng cường khả năng tự chủ thông qua phát triển kinh tế và nâng cao năng lực cạnh tranh.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom fontWeight={600} color="text.primary">
                                            Cách tiếp cận
                                        </Typography>
                                        <Typography variant="body1" paragraph>
                                            Cần có chiến lược hội nhập quốc tế phù hợp, vừa chủ động tham gia vào quá trình toàn cầu hóa, vừa bảo đảm không bị phụ thuộc quá mức vào bất kỳ đối tác nào.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Nút chuyển trang */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            component={RouterLink}
                            to="/challenges"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
                                borderRadius: 2,
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                '&:hover': {
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
                                }
                            }}
                        >
                            Khám Phá Các Thách Thức
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default PageConcepts;
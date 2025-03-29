import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Link,
    Button,
    Card,
    CardContent,
    useTheme,
    Divider
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublicIcon from '@mui/icons-material/Public';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import LaunchIcon from '@mui/icons-material/Launch';
import MouseTrail from './MouseTrail';

export const PageReferences = () => {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Danh sách tài liệu tham khảo
    const references = [
        {
            id: 1,
            title: "Biên giới mềm trong bối cảnh toàn cầu hóa",
            source: "Luật Sao Sáng",
            url: "https://luatsaosang.vn/to-tung/hoi-dap-to-tung/tin-tuc/bien-gioi-mem-trong-boi-canh-toan-cau-hoa-hien-nay.html",
            type: "article",
            label: "Bài báo khoa học",
            icon: <ArticleIcon fontSize="small" />,
            color: theme.palette.primary.main,
            description: "Nghiên cứu chuyên sâu về khái niệm biên giới mềm và tác động của nó trong bối cảnh toàn cầu hóa hiện nay. Bài viết phân tích các khía cạnh văn hóa, kinh tế và chính trị của biên giới mềm."
        },
        {
            id: 2,
            title: "Định hướng xây dựng nền kinh tế độc lập, tự chủ",
            source: "Tạp chí Cộng sản",
            url: "https://www.tapchicongsan.org.vn/web/guest/kinh-te/-/2018/850802/dinh-huong-xay-dung-nen-kinh-te-doc-lap-tu-chu-va-hoi-nhap-quoc-te-toan-dien-sau-rong-trong-boi-canh-moi-o-viet-nam.aspx",
            type: "journal",
            label: "Tạp chí chuyên ngành",
            icon: <BookIcon fontSize="small" />,
            color: theme.palette.secondary.main,
            description: "Bài viết trình bày các định hướng chiến lược trong việc xây dựng nền kinh tế độc lập, tự chủ và hội nhập quốc tế toàn diện, sâu rộng trong bối cảnh mới ở Việt Nam."
        },
        {
            id: 3,
            title: "Vietnam PM hopes US will recognise country's market economy",
            source: "Reuters",
            url: "https://www.reuters.com/markets/asia/vietnam-pm-hopes-us-will-recognise-country-market-economy-2024-11-27/",
            type: "news",
            label: "Báo chí",
            icon: <NewspaperIcon fontSize="small" />,
            color: "#2196f3",
            description: "Bài báo thông tin về kỳ vọng của Việt Nam trong việc được Hoa Kỳ công nhận là nền kinh tế thị trường, một bước tiến quan trọng trong quan hệ thương mại song phương."
        },
        {
            id: 4,
            title: "United States–Vietnam trade relations",
            source: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/United_States%E2%80%93Vietnam_trade_relations",
            type: "reference",
            label: "Tài liệu tham khảo",
            icon: <PublicIcon fontSize="small" />,
            color: "#4caf50",
            description: "Tổng quan về lịch sử quan hệ thương mại giữa Hoa Kỳ và Việt Nam, bao gồm các hiệp định thương mại song phương và đa phương quan trọng."
        },
        {
            id: 5,
            title: "Một số giải pháp bảo vệ chủ quyền biển đảo",
            source: "Tạp chí QPTD",
            url: "https://tapchiqptd.vn/vi/bien-dao-viet-nam/mot-so-giai-phap-bao-ve-chu-quyen-bien-dao-trong-tinh-hinh-moi/17924.html",
            type: "journal",
            label: "Tạp chí chuyên ngành",
            icon: <BookIcon fontSize="small" />,
            color: theme.palette.secondary.main,
            description: "Nghiên cứu về các giải pháp bảo vệ chủ quyền biển đảo của Việt Nam trong tình hình mới, thể hiện sự kết hợp giữa hội nhập quốc tế và bảo vệ chủ quyền dân tộc."
        },
        {
            id: 6,
            title: "Vietnam-Japan ties",
            source: "Japan Times",
            url: "https://www.japantimes.co.jp/news/2023/03/15/business/vietnam-japan-ties/",
            type: "news",
            label: "Báo chí",
            icon: <NewspaperIcon fontSize="small" />,
            color: "#2196f3",
            description: "Bài báo phân tích quan hệ hợp tác chiến lược giữa Việt Nam và Nhật Bản, một ví dụ điển hình về cách Việt Nam đa dạng hóa quan hệ đối ngoại."
        },
        {
            id: 7,
            title: "Vietnam and South Korea cooperation",
            source: "Korean Herald",
            url: "http://www.koreaherald.com/view.php?ud=20220418000765",
            type: "news",
            label: "Báo chí",
            icon: <NewspaperIcon fontSize="small" />,
            color: "#2196f3",
            description: "Thông tin về quan hệ hợp tác kinh tế và văn hóa giữa Việt Nam và Hàn Quốc, thể hiện chiến lược đa phương hóa trong chính sách đối ngoại của Việt Nam."
        }
    ];

    return (
        <>
            <MouseTrail />
            <Box
                sx={{
                    minHeight: '100vh',
                    py: 6,
                    background: '#f5f5f5'
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
                            <SchoolIcon sx={{ fontSize: 40, verticalAlign: 'middle', mr: 2 }} />
                            Tài liệu tham khảo
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}
                        >
                            Danh sách các nguồn tài liệu khoa học và báo chí được sử dụng trong nghiên cứu
                        </Typography>
                    </Box>

                    {/* Danh sách tài liệu */}
                    {references.map((reference) => (
                        <Paper
                            key={reference.id}
                            elevation={1}
                            sx={{
                                mb: 3,
                                overflow: 'hidden',
                                borderRadius: 1,
                                border: '1px solid #e0e0e0',
                                transition: 'box-shadow 0.3s',
                                '&:hover': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                }
                            }}
                        >
                            <Box>
                                <Box sx={{ px: 3, py: 3 }}>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 2 }}>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            sx={{
                                                fontWeight: 600,
                                                flex: 1
                                            }}
                                        >
                                            {reference.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                px: 2,
                                                py: 0.5,
                                                borderRadius: 1,
                                                bgcolor: reference.color + '15',
                                                color: reference.color,
                                                mt: { xs: 1, sm: 0 },
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            {reference.icon}
                                            <Box component="span" sx={{ ml: 1 }}>
                                                {reference.source}
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        paragraph
                                        sx={{ mb: 3 }}
                                    >
                                        {reference.description}
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        endIcon={<LaunchIcon />}
                                        href={reference.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderColor: reference.color,
                                            color: reference.color,
                                            '&:hover': {
                                                borderColor: reference.color,
                                                bgcolor: reference.color + '10',
                                            }
                                        }}
                                    >
                                        XEM TÀI LIỆU
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    ))}

                    {/* Footer note */}
                    <Divider sx={{ my: 4 }} />

                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 3 }}>
                        <strong>Lưu ý:</strong> Các tài liệu tham khảo trên đã được sử dụng trong quá trình nghiên cứu và biên soạn nội dung.
                        <br />Vui lòng trích dẫn nguồn khi sử dụng thông tin từ trang web này.
                    </Typography>
                </Container>
            </Box>
        </>
    );
};

export default PageReferences;
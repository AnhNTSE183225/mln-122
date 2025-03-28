import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  useTheme,
  Zoom,
  Fade,
  Grow
} from '@mui/material';
import { Link as RouterLink } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import BalanceIcon from '@mui/icons-material/Balance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MouseTrail from './MouseTrail';
import FlipBook from './FlipBook';


export const PageHome = () => {
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hiệu ứng gradient background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);

      const bodyEl = document.body;
      const redValue = Math.min(255, Math.max(200, 255 - scrolled / 10));
      const greenValue = Math.min(255, Math.max(200, 245 - scrolled / 15));
      const blueValue = Math.min(255, Math.max(200, 245 - scrolled / 20));

      bodyEl.style.background = `linear-gradient(135deg, 
        rgb(${redValue}, ${greenValue}, ${blueValue}) 0%, 
        rgb(${redValue - 30}, ${greenValue - 20}, ${blueValue}) 100%)`;

      // Kiểm tra vị trí để hiển thị Call to Action
      if (scrolled > 300 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger animation after initial load
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  // Nội dung cho FlipBook
  const bookPages = [
    // Trang 1 - Giới thiệu
    <Box key="page1">
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
        <MenuBookIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        Hội Nhập Quốc Tế & Độc Lập Tự Chủ
      </Typography>
      <Typography variant="body1" paragraph>
        Nghiên cứu về thách thức của hội nhập quốc tế đối với độc lập, tự chủ và các giải pháp của Việt Nam trong bối cảnh toàn cầu hóa hiện nay.
      </Typography>
      <Typography variant="body1" paragraph>
        Hội nhập quốc tế đã trở thành xu thế tất yếu. Tuy nhiên, điều đó cũng đồng nghĩa với việc các quốc gia ngày càng phụ thuộc lẫn nhau, từ đó tạo ra khái niệm "biên giới mềm".
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <PublicIcon sx={{ fontSize: 80, color: theme.palette.primary.light }} />
      </Box>
      <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 2, textAlign: 'center' }}>
        Lật sang trang tiếp theo để tìm hiểu về "Biên giới mềm"
      </Typography>
    </Box>,

    // Trang 2 - Khái niệm Biên giới mềm
    <Box key="page2">
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
        <PublicIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        Biên Giới Mềm
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>"Biên giới mềm"</strong> không chỉ đơn giản là ranh giới vật lý mà còn bao hàm các khía cạnh kinh tế, văn hóa và chính trị. Nó thể hiện khả năng một quốc gia mở rộng tầm ảnh hưởng của mình sang các quốc gia khác qua các lĩnh vực mềm – như ngoại giao văn hóa, truyền thông, thương mại – thay vì sử dụng biện pháp quân sự hoặc cưỡng chế.
      </Typography>
      <Typography variant="body1" paragraph>
        Theo Mác – Lênin, sự phát triển của lực lượng sản xuất luôn đi kèm với quá trình xã hội hóa các quan hệ sản xuất. Khi các quốc gia hội nhập sâu rộng, chúng dễ dàng "đan xen" lẫn nhau qua các mối quan hệ kinh tế và văn hóa, từ đó ranh giới giữa các quốc gia trở nên mềm dẻo hơn.
      </Typography>
    </Box>,

    // Trang 3 - Khái niệm Kinh tế độc lập tự chủ
    <Box key="page3">
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
        <SecurityIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        Nền Kinh Tế Độc Lập Tự Chủ
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Nền kinh tế độc lập, tự chủ:</strong> Đây là nền kinh tế không bị lệ thuộc, phụ thuộc vào nước khác, người khác, hoặc vào một tổ chức kinh tế nào đó về đường lối, chính sách phát triển, không để bất kỳ ai dùng các điều kiện kinh tế, tài chính, thương mại, viện trợ... để áp đặt, khống chế, làm tổn hại đến chủ quyền quốc gia và lợi ích cơ bản của dân tộc.
      </Typography>
      <Typography variant="body1" paragraph>
        Xây dựng nền kinh tế độc lập tự chủ không chỉ xuất phát từ quan điểm, đường lối chính trị độc lập tự chủ mà còn là đòi hỏi của thực tiễn, nhằm bảo đảm phát triển bền vững và có hiệu quả cho nền kinh tế, cho việc mở cửa, hội nhập kinh tế quốc tế.
      </Typography>
    </Box>,

    // Trang 4 - Thách thức của hội nhập
    <Box key="page4">
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
        <GroupsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        Thách Thức Của Hội Nhập Quốc Tế
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Hội nhập quốc tế đem lại nhiều cơ hội nhưng cũng tạo ra các thách thức lớn:
      </Typography>

      <Box sx={{ pl: 2, mb: 2 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>1. Sự lệ thuộc:</strong> Sự tùy thuộc lẫn nhau giữa các quốc gia có thể dẫn đến sự lệ thuộc, đặc biệt đối với các nước nghèo, nước nhỏ trong quan hệ với các nước giàu, nước lớn.
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>2. Phân hóa xã hội:</strong> Lợi ích từ hội nhập có thể phân chia không đồng đều, làm gia tăng phân hóa xã hội và các vấn đề xã hội.
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>3. Suy giảm chủ quyền:</strong> Hội nhập không hiệu quả có thể làm suy giảm độc lập, tự chủ và chủ quyền quốc gia.
        </Typography>
      </Box>
    </Box>,

    // Trang 5 - Giải pháp của Việt Nam
    <Box key="page5">
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
        <TrendingUpIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        Giải Pháp Của Việt Nam
      </Typography>
      <Typography variant="body1" paragraph>
        Việt Nam đã triển khai 5 nhóm giải pháp chính để đảm bảo hội nhập quốc tế hiệu quả đồng thời giữ vững độc lập tự chủ:
      </Typography>

      <Box sx={{ pl: 2, mb: 2 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>1. Hoàn thiện đường lối: </strong>
          Việt Nam đã hoàn thiện đường lối đối ngoại và chính sách hội nhập kinh tế qua các văn kiện nghị quyết từ Đại hội Đảng, giúp xác lập mục tiêu "chủ động hội nhập – bảo đảm độc lập, tự chủ".
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>2. Đẩy mạnh công nghiệp hóa, hiện đại hóa: </strong>
          Tăng cường đầu tư vào R&D, chuyển dịch cơ cấu sản xuất sang công nghệ cao và tái cấu trúc nền kinh tế.
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>3. Tăng cường quan hệ kinh tế đối ngoại: </strong>
          Đa dạng hóa đối tác thông qua việc ký kết nhiều FTA với các đối tác khu vực và toàn cầu.
        </Typography>
      </Box>
    </Box>,

    // Trang 6 - Chiến lược "Cây tre Việt Nam"
    <Box key="page6">
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
        Chiến Lược "Cây Tre Việt Nam"
      </Typography>
      <Box sx={{ textAlign: 'center', my: 2 }}>
        <PublicIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
      </Box>
      <Typography variant="body1" paragraph>
        Hình ảnh <strong>"cây tre Việt Nam"</strong> với đặc tính "gốc vững, thân chắc, cành uyển chuyển" thể hiện sự kết hợp hài hòa giữa tính kiên định và linh hoạt trong đường lối đối ngoại của Việt Nam.
      </Typography>
      <Typography variant="body1" paragraph>
        Theo triết học Mác-Lênin, mọi sự vật và hiện tượng đều tồn tại trong mối quan hệ biện chứng. "Cây tre" biểu trưng cho tính biện chứng: kiên định về nguyên tắc (gốc vững, thân chắc) và linh hoạt trong ứng xử (cành uyển chuyển).
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mt: 2 }}>
        Để tìm hiểu thêm chi tiết, vui lòng khám phá các mục khác trên trang web!
      </Typography>
    </Box>
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* Mouse Trail Effect */}
      <MouseTrail />

      {/* Add keyframes for animations */}
      <Box sx={{
        '@keyframes gradientShift': {
          '0%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0.8 }
        },
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)', opacity: 0.7 },
          '50%': { transform: 'scale(1.2)', opacity: 0.3 },
          '100%': { transform: 'scale(1)', opacity: 0.7 }
        },
        '@keyframes float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        '@keyframes slideIn': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        '@keyframes fadeInUp': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }} />

      {/* Hero Banner */}
      <Fade in={true} timeout={1500}>
        <Paper
          sx={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://xdcs.cdnchinhphu.vn/thumb_w/900/446259493575335936/2025/3/4/jhdq81e-17410552484291331023939-35-0-675-1024-crop-1741055259952580166107.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Parallax effect
            color: 'white',
            py: 8,
            mb: 6,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255,0,0,0.3) 0%, rgba(255,204,0,0.3) 100%)',
              animation: 'gradientShift 10s infinite alternate',
            }
          }}
        >
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Zoom in={true} timeout={1500} style={{ transitionDelay: '500ms' }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  animation: 'fadeInUp 1s ease-out',
                }}
              >
                Hội Nhập Quốc Tế & Độc Lập Tự Chủ
              </Typography>
            </Zoom>

            <Fade in={true} timeout={2000} style={{ transitionDelay: '1000ms' }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  maxWidth: '800px',
                  mx: 'auto',
                  animation: 'fadeInUp 1s ease-out 0.5s both',
                }}
              >
                Khám phá sách điện tử về thách thức của hội nhập quốc tế đối với độc lập, tự chủ và các giải pháp của Việt Nam
              </Typography>
            </Fade>

            <Grow in={true} timeout={1000} style={{ transitionDelay: '1500ms' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                  transition: 'all 0.3s ease',
                  animation: 'pulse 2s infinite',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
                    animation: 'none',
                  }
                }}
                onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
              >
                Đọc Sách
              </Button>
            </Grow>

            {/* Floating icons */}
            <Box sx={{ position: 'absolute', top: '15%', left: '10%', animation: 'float 4s ease-in-out infinite' }}>
              <PublicIcon sx={{ fontSize: 40, color: 'rgba(255,255,255,0.5)' }} />
            </Box>
            <Box sx={{ position: 'absolute', top: '60%', right: '15%', animation: 'float 5s ease-in-out infinite 1s' }}>
              <SecurityIcon sx={{ fontSize: 35, color: 'rgba(255,255,255,0.4)' }} />
            </Box>
            <Box sx={{ position: 'absolute', bottom: '20%', left: '20%', animation: 'float 6s ease-in-out infinite 0.5s' }}>
              <TrendingUpIcon sx={{ fontSize: 30, color: 'rgba(255,255,255,0.3)' }} />
            </Box>
          </Container>
        </Paper>
      </Fade>

      {/* Main Content - Flip Book */}
      <Container maxWidth="lg">
        <Zoom in={true} timeout={1000} style={{ transitionDelay: scrollY > 100 ? '0ms' : '1500ms' }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                background: theme.palette.primary.main,
                borderRadius: 2,
                animation: 'slideIn 1s ease-out'
              }
            }}
          >
            <MenuBookIcon sx={{ verticalAlign: 'middle', mr: 1, animation: 'spin 10s linear infinite' }} />
            Sách Điện Tử Thông Tin
          </Typography>
        </Zoom>

        <Fade in={true} timeout={1000} style={{ transitionDelay: scrollY > 200 ? '0ms' : '2000ms' }}>
          <Box>
            <FlipBook pages={bookPages} title="Hội Nhập Quốc Tế & Độc Lập Tự Chủ" />
          </Box>
        </Fade>

        {/* Call to Action */}
        <Zoom in={isVisible} timeout={1000}>
          <Paper
            elevation={4}
            sx={{
              textAlign: 'center',
              py: 6,
              px: 4,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}dd, ${theme.palette.secondary.dark}dd)`,
              color: 'white',
              mt: 8,
              position: 'relative',
              overflow: 'hidden',
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 1s ease-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                animation: 'slideIn 3s ease-in-out infinite'
              }
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Tìm Hiểu Chi Tiết Hơn
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
              Khám phá đầy đủ các thách thức của hội nhập quốc tế và giải pháp của Việt Nam thông qua các mục chuyên sâu trên trang web của chúng tôi.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
                '& > button': {
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.05)',
                  }
                }
              }}
            >
              <Zoom in={isVisible} style={{ transitionDelay: '200ms' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to="/challenges"
                  endIcon={<GroupsIcon />}
                  sx={{ px: 3, py: 1, fontWeight: 600 }}
                >
                  Thách Thức
                </Button>
              </Zoom>

              <Zoom in={isVisible} style={{ transitionDelay: '400ms' }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/solutions"
                  endIcon={<TrendingUpIcon />}
                  sx={{ px: 3, py: 1, fontWeight: 600 }}
                >
                  Giải Pháp
                </Button>
              </Zoom>

              <Zoom in={isVisible} style={{ transitionDelay: '600ms' }}>
                <Button
                  variant="contained"
                  color="warning"
                  component={RouterLink}
                  to="/achievements"
                  endIcon={<EmojiEventsIcon />}
                  sx={{ px: 3, py: 1, fontWeight: 600 }}
                >
                  Thành Tựu
                </Button>
              </Zoom>
            </Box>
          </Paper>
        </Zoom>
      </Container>
    </Box>
  );
};

export default PageHome;
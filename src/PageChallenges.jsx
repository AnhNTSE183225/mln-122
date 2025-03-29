import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import MouseTrail from './MouseTrail';

// Import icons (assuming you'd replace these with custom SVGs or font icons)
import WarningIcon from '@mui/icons-material/Warning';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';
import ImportExportIcon from '@mui/icons-material/ImportExport';

export const PageChallenges = () => {
    const [animateItems, setAnimateItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer for animations
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

    // Challenge data
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
            image: 'https://media.vietnamplus.vn/images/fa2bb207fd17be03581ee0a8982370eae1375cf79029b5825fd01e87661e00eafdba354da8f3694877205e8acc37dc7e9ae17456e7e18781897530f1fcefd4b5535d00cf23f7dca553dd1fa303cf6417fac3c8bbce0d98bc3914f5dc6cbea960/ttxvn-khu-cong-nghe-cao-thanh-pho-ho-chi-minh-resize.jpg.webp',
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
            image: 'https://bcp.cdnchinhphu.vn/334894974524682240/2025/2/21/47710538611431357842741412546189749895259445n-17401159143151231520052.jpg',
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
            image: 'https://nld.mediacdn.vn/291774122806476800/2024/10/12/img6424-17192311635731095987289-17287054725601108946621.jpg',
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
            image: 'https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/1/19/15a8b165e349473d89fe6638fdad99fb',
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
            <div className="page-container" style={{
                paddingTop: '60px',
                paddingBottom: '60px',
                background: '#f5f5f5',
                minHeight: '100vh'
            }}>
                <div className="container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {/* Header */}
                    <div className="header" style={{
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            color: '#1a237e',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ marginRight: '15px', display: 'inline-flex' }}><WarningIcon /></span>
                            Thách Thức Của Hội Nhập Quốc Tế
                        </h1>
                        <h2 style={{
                            fontSize: '1.2rem',
                            fontWeight: 400,
                            color: '#555',
                            maxWidth: '800px',
                            margin: '20px auto 0'
                        }}>
                            Những khó khăn và thách thức mà Việt Nam phải đối mặt khi hội nhập quốc tế trong việc bảo đảm độc lập, tự chủ
                        </h2>
                    </div>

                    {/* Introduction */}
                    <div className="intro-paper" style={{
                        padding: '30px',
                        marginBottom: '60px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            marginBottom: '20px'
                        }}>
                            Khi Việt Nam ngày càng hội nhập sâu rộng vào nền kinh tế toàn cầu, mặc dù thu được nhiều thành tựu to lớn,
                            nhưng cũng đối mặt với không ít thách thức trong việc duy trì nền kinh tế độc lập, tự chủ.
                            Nếu không chủ động, sáng tạo tìm ra những phương thức mới phù hợp với hoàn cảnh và các điều kiện
                            hình thành từ quá trình hội nhập quốc tế, thì việc bảo đảm độc lập, tự chủ cũng sẽ gặp nhiều khó khăn.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            fontWeight: 500,
                            color: '#3f51b5',
                            margin: 0
                        }}>
                            Dưới đây là các thách thức chính mà Việt Nam phải đối mặt trong quá trình hội nhập quốc tế:
                        </p>
                    </div>

                    {/* Challenges List */}
                    <div className="challenges-container" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        {challenges.map((challenge, index) => (
                            <div
                                id={challenge.id}
                                key={challenge.id}
                                className="animate-item challenge-card"
                                style={{
                                    width: '80vw',
                                    maxWidth: '1000px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: `1px solid ${challenge.borderColor}`,
                                    backgroundColor: challenge.backgroundColor,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    marginBottom: '30px',
                                    transform: isAnimated(challenge.id) ? 'translateY(0)' : 'translateY(50px)',
                                    opacity: isAnimated(challenge.id) ? 1 : 0,
                                    transition: 'transform 0.6s ease, opacity 0.6s ease',
                                    transitionDelay: `${index * 0.1}s`,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Image Section */}
                                <div className="challenge-image" style={{
                                    width: '100%',
                                    position: 'relative',
                                    height: '250px'
                                }}>
                                    <img
                                        src={challenge.image}
                                        alt={challenge.title}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                    />
                                </div>
                                
                                {/* Content Section */}
                                <div className="challenge-content" style={{
                                    padding: '24px'
                                }}>
                                    <div className="challenge-header" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '16px'
                                    }}>
                                        <div className="challenge-icon" style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: '#3f51b5',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '16px'
                                        }}>
                                            {challenge.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 600,
                                            margin: 0
                                        }}>
                                            {challenge.title}
                                        </h3>
                                    </div>

                                    <p style={{
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                        marginBottom: '16px'
                                    }}>
                                        {challenge.description}
                                    </p>

                                    <div className="divider" style={{
                                        height: '1px',
                                        backgroundColor: 'rgba(0,0,0,0.12)',
                                        margin: '16px 0'
                                    }}></div>

                                    <h4 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        marginBottom: '12px'
                                    }}>
                                        Biểu hiện cụ thể:
                                    </h4>

                                    <ul className="details-list" style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {challenge.details.map((detail, idx) => (
                                            <li key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                marginBottom: '8px',
                                                padding: '4px 0'
                                            }}>
                                                <span style={{
                                                    color: '#3f51b5',
                                                    marginRight: '10px',
                                                    marginTop: '3px'
                                                }}>
                                                    <ArrowForwardIcon style={{ fontSize: '16px' }} />
                                                </span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="cta-section" style={{
                        padding: '30px',
                        marginTop: '20px',
                        borderRadius: '8px',
                        backgroundColor: '#3f51b5',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        width: '80vw',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                            zIndex: 1
                        }}></div>
                        
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <div className="cta-text" style={{ flex: '1 1 100%', marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>
                                    Tìm Hiểu Giải Pháp
                                </h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                                    Mặc dù đối mặt với nhiều thách thức, Việt Nam đã đưa ra nhiều giải pháp sáng tạo để vừa
                                    tận dụng cơ hội từ hội nhập quốc tế, vừa bảo đảm độc lập, tự chủ của đất nước.
                                </p>
                            </div>
                            <div className="cta-button" style={{ flex: '1 1 100%', textAlign: 'center' }}>
                                <Link
                                    to="/giai-phap" 
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '12px 24px',
                                        backgroundColor: 'white',
                                        color: '#3f51b5',
                                        textDecoration: 'none',
                                        borderRadius: '4px',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    Khám Phá Giải Pháp
                                    <span style={{ marginLeft: '8px', display: 'inline-flex' }}><ArrowForwardIcon /></span>
                                </Link>
                            </div>
                        </div>

                        {/* Decorative icons */}
                        <div style={{
                            position: 'absolute',
                            bottom: -20,
                            right: -20,
                            opacity: 0.1,
                            zIndex: 1,
                            fontSize: '120px'
                        }}>
                            <ImportExportIcon style={{ fontSize: 'inherit' }} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: -20,
                            left: -20,
                            opacity: 0.1,
                            zIndex: 1,
                            fontSize: '100px'
                        }}>
                            <LockIcon style={{ fontSize: 'inherit' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive styles */}
            <style jsx>{`
                @media (min-width: 768px) {
                    .challenge-card {
                        width: 80vw !important;
                    }
                    
                    .challenge-image {
                        height: 300px !important;
                    }
                    
                    .cta-section {
                        width: 80vw !important;
                    }
                    
                    .cta-text {
                        flex: 0 0 70% !important;
                        max-width: 70% !important;
                        margin-bottom: 0 !important;
                    }
                    
                    .cta-button {
                        flex: 0 0 30% !important;
                        max-width: 30% !important;
                    }
                }
                
                @media (max-width: 767px) {
                    .challenge-card {
                        width: 100vw !important;
                        max-width: calc(100% - 40px) !important;
                    }
                    
                    .cta-section {
                        width: 100vw !important;
                        max-width: calc(100% - 40px) !important;
                    }
                }
            `}</style>
        </>
    );
};

export default PageChallenges;
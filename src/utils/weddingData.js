const weddingData = {
  hindu: {
    images: [
      { id: 1, src: './hinduwedding/hw1.jpg', alt: 'Hindu Wedding 1', title: 'Traditional Mandap' },
      { id: 2, src: './hinduwedding/hw2.jpg', alt: 'Hindu Wedding 2', title: 'Sacred Ritual' },
      { id: 3, src: './hinduwedding/hw3.jpg', alt: 'Hindu Wedding 3', title: 'Couple Portrait' },
      { id: 4, src: './hinduwedding/hw4.jpg', alt: 'Hindu Wedding 4', title: 'Decorations' },
      { id: 5, src: './hinduwedding/hw5.jpg', alt: 'Hindu Wedding 5', title: 'Wedding Feast' },
      { id: 6, src: './hinduwedding/hw6.jpg', alt: 'Hindu Wedding 6', title: 'Cultural Dance' },
      { id: 7, src: './hinduwedding/hw7.jpg', alt: 'Hindu Wedding 7', title: 'Bridal Prep' },
      { id: 8, src: './hinduwedding/hw8.jpg', alt: 'Hindu Wedding 8', title: 'Reception' },
      { id: 9, src: './hinduwedding/hw9.jpg', alt: 'Hindu Wedding 9', title: 'Family Moment' }
    ],
    videos: [
      { id: 1, src: './weddingvideos/video1.mp4', title: 'Hindu Highlights 1', thumbnail: 'https://via.placeholder.com/400x300?text=Video+1', duration: '05:30' },
      { id: 2, src: './weddingvideos/video2.mp4', title: 'Hindu Highlights 2', thumbnail: 'https://via.placeholder.com/400x300?text=Video+2', duration: '08:45' },
      { id: 3, src: './weddingvideos/video3.mp4', title: 'Hindu Highlights 3', thumbnail: 'https://via.placeholder.com/400x300?text=Video+3', duration: '03:20' },
      { id: 4, src: './weddingvideos/video1.mp4', title: 'Hindu Highlights 4', thumbnail: 'https://via.placeholder.com/400x300?text=Video+4', duration: '06:15' },
      { id: 5, src: './weddingvideos/video2.mp4', title: 'Hindu Highlights 5', thumbnail: 'https://via.placeholder.com/400x300?text=Video+5', duration: '04:50' },
      { id: 6, src: './weddingvideos/video3.mp4', title: 'Hindu Highlights 6', thumbnail: 'https://via.placeholder.com/400x300?text=Video+6', duration: '07:25' },
      { id: 7, src: './weddingvideos/video1.mp4', title: 'Hindu Highlights 7', thumbnail: 'https://via.placeholder.com/400x300?text=Video+7', duration: '05:10' },
      { id: 8, src: './weddingvideos/video2.mp4', title: 'Hindu Highlights 8', thumbnail: 'https://via.placeholder.com/400x300?text=Video+8', duration: '06:40' },
      { id: 9, src: './weddingvideos/video3.mp4', title: 'Hindu Highlights 9', thumbnail: 'https://via.placeholder.com/400x300?text=Video+9', duration: '04:20' }
    ]
  },
  muslim: {
    images: [
      { id: 1, src: './muslimwedding/mw1.jpg', alt: 'Muslim Wedding 1', title: 'Nikah Ceremony' },
      { id: 2, src: './muslimwedding/mw2.jpg', alt: 'Muslim Wedding 2', title: 'Wedding Decor' },
      { id: 3, src: './muslimwedding/mw3.jpg', alt: 'Muslim Wedding 3', title: 'Couple Portrait' },
      { id: 4, src: './muslimwedding/mw4.jpg', alt: 'Muslim Wedding 4', title: 'Reception' },
      { id: 5, src: './muslimwedding/mw5.jpg', alt: 'Muslim Wedding 5', title: 'Family Gathering' },
      { id: 6, src: './muslimwedding/mw6.jpg', alt: 'Muslim Wedding 6', title: 'Traditional Dance' },
      { id: 7, src: './muslimwedding/mw7.jpg', alt: 'Muslim Wedding 7', title: 'Bridal Prep' },
      { id: 8, src: './muslimwedding/mw8.jpg', alt: 'Muslim Wedding 8', title: 'Ceremony Setup' },
      { id: 9, src: './muslimwedding/mw9.jpg', alt: 'Muslim Wedding 9', title: 'Group Photo' }
    ],
    videos: [
      { id: 1, src: './weddingvideos/video1.mp4', title: 'Muslim Highlights 1', thumbnail: 'https://via.placeholder.com/400x300?text=Video+1', duration: '05:30' },
      { id: 2, src: './weddingvideos/video2.mp4', title: 'Muslim Highlights 2', thumbnail: 'https://via.placeholder.com/400x300?text=Video+2', duration: '08:45' },
      { id: 3, src: './weddingvideos/video3.mp4', title: 'Muslim Highlights 3', thumbnail: 'https://via.placeholder.com/400x300?text=Video+3', duration: '03:20' },
      { id: 4, src: './weddingvideos/video1.mp4', title: 'Muslim Highlights 4', thumbnail: 'https://via.placeholder.com/400x300?text=Video+4', duration: '06:15' },
      { id: 5, src: './weddingvideos/video2.mp4', title: 'Muslim Highlights 5', thumbnail: 'https://via.placeholder.com/400x300?text=Video+5', duration: '04:50' },
      { id: 6, src: './weddingvideos/video3.mp4', title: 'Muslim Highlights 6', thumbnail: 'https://via.placeholder.com/400x300?text=Video+6', duration: '07:25' },
      { id: 7, src: './weddingvideos/video1.mp4', title: 'Muslim Highlights 7', thumbnail: 'https://via.placeholder.com/400x300?text=Video+7', duration: '05:10' },
      { id: 8, src: './weddingvideos/video2.mp4', title: 'Muslim Highlights 8', thumbnail: 'https://via.placeholder.com/400x300?text=Video+8', duration: '06:40' },
      { id: 9, src: './weddingvideos/video3.mp4', title: 'Muslim Highlights 9', thumbnail: 'https://via.placeholder.com/400x300?text=Video+9', duration: '04:20' }
    ]
  },
  christian: {
    images: [
      { id: 1, src: './christianwedding/cw1.jpg', alt: 'Christian Wedding 1', title: 'Church Ceremony' },
      { id: 2, src: './christianwedding/cw2.jpg', alt: 'Christian Wedding 2', title: 'Reception Decor' },
      { id: 3, src: './christianwedding/cw3.jpg', alt: 'Christian Wedding 3', title: 'Couple Portrait' },
      { id: 4, src: './christianwedding/cw4.jpg', alt: 'Christian Wedding 4', title: 'Vows Exchange' },
      { id: 5, src: './christianwedding/cw5.jpg', alt: 'Christian Wedding 5', title: 'Wedding Cake' },
      { id: 6, src: './christianwedding/cw6.jpg', alt: 'Christian Wedding 6', title: 'First Dance' },
      { id: 7, src: './christianwedding/cw7.jpg', alt: 'Christian Wedding 7', title: 'Bridal Entry' },
      { id: 8, src: './christianwedding/cw8.jpg', alt: 'Christian Wedding 8', title: 'Guest Photos' },
      { id: 9, src: './christianwedding/cw9.jpg', alt: 'Christian Wedding 9', title: 'Outdoor Shot' }
    ],
    videos: [
      { id: 1, src: './weddingvideos/video1.mp4', title: 'Christian Highlights 1', thumbnail: 'https://via.placeholder.com/400x300?text=Video+1', duration: '05:30' },
      { id: 2, src: './weddingvideos/video2.mp4', title: 'Christian Highlights 2', thumbnail: 'https://via.placeholder.com/400x300?text=Video+2', duration: '08:45' },
      { id: 3, src: './weddingvideos/video3.mp4', title: 'Christian Highlights 3', thumbnail: 'https://via.placeholder.com/400x300?text=Video+3', duration: '03:20' },
      { id: 4, src: './weddingvideos/video1.mp4', title: 'Christian Highlights 4', thumbnail: 'https://via.placeholder.com/400x300?text=Video+4', duration: '06:15' },
      { id: 5, src: './weddingvideos/video2.mp4', title: 'Christian Highlights 5', thumbnail: 'https://via.placeholder.com/400x300?text=Video+5', duration: '04:50' },
      { id: 6, src: './weddingvideos/video3.mp4', title: 'Christian Highlights 6', thumbnail: 'https://via.placeholder.com/400x300?text=Video+6', duration: '07:25' },
      { id: 7, src: './weddingvideos/video1.mp4', title: 'Christian Highlights 7', thumbnail: 'https://via.placeholder.com/400x300?text=Video+7', duration: '05:10' },
      { id: 8, src: './weddingvideos/video2.mp4', title: 'Christian Highlights 8', thumbnail: 'https://via.placeholder.com/400x300?text=Video+8', duration: '06:40' },
      { id: 9, src: './weddingvideos/video3.mp4', title: 'Christian Highlights 9', thumbnail: 'https://via.placeholder.com/400x300?text=Video+9', duration: '04:20' }
    ]
  }
};

export default weddingData;
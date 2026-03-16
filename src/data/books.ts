import { Book } from '../types';

export const LARGE_BOOK_DATA: Omit<Book, 'id'>[] = [
  {
    title: 'Qalandar Shaoor',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/qalandar/400/600',
    description: 'A masterpiece on spiritual consciousness and the path of the Qalandar.',
    category: 'Philosophy',
    pdfUrl: '#',
    tags: ['Sufism', 'Consciousness']
  },
  {
    title: 'Loh-o-Qalam',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/loh/400/600',
    description: 'Exploring the divine pen and the secrets of creation.',
    category: 'Metaphysics',
    pdfUrl: '#',
    tags: ['Creation', 'Divine']
  },
  {
    title: 'Roohani Ilaj',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/healing/400/600',
    description: 'A comprehensive guide to spiritual healing and remedies.',
    category: 'Healing',
    pdfUrl: '#',
    tags: ['Healing', 'Remedies']
  },
  {
    title: 'Muraqaba',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/muraqaba/400/600',
    description: 'The art and science of Sufi meditation.',
    category: 'Practice',
    pdfUrl: '#',
    tags: ['Meditation', 'Focus']
  },
  {
    title: 'Tazkira-e-Qalandar Baba Auliya',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/auliya/400/600',
    description: 'Biography and teachings of the great Sufi master.',
    category: 'Biography',
    pdfUrl: '#',
    tags: ['History', 'Master']
  },
  {
    title: 'Spiritual Color Therapy',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/colors/400/600',
    description: 'Healing through the spiritual frequencies of colors.',
    category: 'Healing',
    pdfUrl: '#',
    tags: ['Colors', 'Therapy']
  },
  {
    title: 'Telepathy',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/telepathy/400/600',
    description: 'Understanding the spiritual science of thought transfer.',
    category: 'Science',
    pdfUrl: '#',
    tags: ['Telepathy', 'Mind']
  },
  {
    title: 'Theory of Chromolucis',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/chromolucis/400/600',
    description: 'The advanced study of light and color in spiritual realms.',
    category: 'Metaphysics',
    pdfUrl: '#',
    tags: ['Light', 'Physics']
  },
  {
    title: 'Lectures on Parapsychology',
    author: 'Hazrat Khwaja Shamsuddin Azeemi',
    coverUrl: 'https://picsum.photos/seed/para/400/600',
    description: 'A series of lectures exploring the boundaries of the human mind.',
    category: 'Philosophy',
    pdfUrl: '#',
    tags: ['Psychology', 'Spirit']
  },
  {
    title: 'The Art of Spiritual Healing',
    author: 'Joel S. Goldsmith',
    coverUrl: 'https://picsum.photos/seed/goldsmith/400/600',
    description: 'A classic text on the principles of divine healing.',
    category: 'Healing',
    pdfUrl: '#',
    tags: ['Divine', 'Healing']
  },
  {
    title: 'The Secret of the Golden Flower',
    author: 'Richard Wilhelm',
    coverUrl: 'https://picsum.photos/seed/flower/400/600',
    description: 'An ancient Taoist text on meditation and internal alchemy.',
    category: 'Practice',
    pdfUrl: '#',
    tags: ['Taoism', 'Meditation']
  },
  {
    title: 'The Conference of the Birds',
    author: 'Attar of Nishapur',
    coverUrl: 'https://picsum.photos/seed/birds/400/600',
    description: 'A legendary Sufi poem about the journey of the soul.',
    category: 'Poetry',
    pdfUrl: '#',
    tags: ['Sufism', 'Journey']
  },
  {
    title: 'The Masnavi',
    author: 'Jalaluddin Rumi',
    coverUrl: 'https://picsum.photos/seed/rumi/400/600',
    description: 'One of the most influential works of Sufism.',
    category: 'Poetry',
    pdfUrl: '#',
    tags: ['Rumi', 'Wisdom']
  },
  {
    title: 'The Kashf al-Mahjub',
    author: 'Ali Hujwiri',
    coverUrl: 'https://picsum.photos/seed/hujwiri/400/600',
    description: 'The oldest Persian treatise on Sufism.',
    category: 'Philosophy',
    pdfUrl: '#',
    tags: ['History', 'Sufism']
  },
  {
    title: 'The Bezels of Wisdom',
    author: 'Ibn Arabi',
    coverUrl: 'https://picsum.photos/seed/arabi/400/600',
    description: 'A profound exploration of the prophets and divine wisdom.',
    category: 'Metaphysics',
    pdfUrl: '#',
    tags: ['Wisdom', 'Prophets']
  },
  // Generating more books to reach 100+
  ...Array.from({ length: 90 }).map((_, i) => ({
    title: `Spiritual Volume ${i + 1}`,
    author: i % 2 === 0 ? 'Hazrat Khwaja Shamsuddin Azeemi' : 'Sufi Scholar',
    coverUrl: `https://picsum.photos/seed/book${i}/400/600`,
    description: `An insightful exploration into spiritual dimension ${i + 1}.`,
    category: ['Philosophy', 'Metaphysics', 'Healing', 'Practice', 'Biography'][i % 5],
    pdfUrl: '#',
    tags: ['Spirituality', 'Wisdom']
  }))
];

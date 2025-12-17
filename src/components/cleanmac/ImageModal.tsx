import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ImageModalProps {
  selectedImage: string | null
  onClose: () => void
}

export default function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  const { t } = useTranslation()

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={t('cleanmac.screenshots_enlarged')}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label={t('cleanmac.aria_close')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}







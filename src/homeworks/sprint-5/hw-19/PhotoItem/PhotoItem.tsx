import { useState } from 'react'
import styles from './PhotoItem.module.css'
import { Photo, useUpdatePhotoMutation } from '../api/photosApi'
type PhotoItemProps = {
  photo: Photo
}

export const PhotoItem = ({ photo }: PhotoItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(photo.title)

  const [updatePhoto] = useUpdatePhotoMutation()

  const handleSave = async () => {
    if (newTitle.trim()) {
      console.log('newTitle', newTitle)
      // 3.2 📝 Обновите заголовок фотографии на сервере
      await updatePhoto({ ...photo, title: newTitle })
      setIsEditing(false)
    }
  }

  return (
    <div className={styles.photoCard} id={`hw19-photo-${photo.id}`}>
      <img src={photo.url} alt={photo.title} />
      {isEditing ? (
        <div className={styles.editMode}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter new title"
          />
          <button id="hw19-button-save" onClick={handleSave}>
            Save
          </button>
          <button id="hw19-button-cancel" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div className={styles.photoInfo}>
          <p id="hw19-title-text">{photo.title}</p>
          <button id="hw19-button-change-title" onClick={() => setIsEditing(true)}>
            Update title
          </button>
        </div>
      )}
    </div>
  )
}

type TagsProps = {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="tags">
      {tags.length > 0 && tags.map(tag => (<span>{tag}</span>))}
    </div>
  )
}

export default Tags
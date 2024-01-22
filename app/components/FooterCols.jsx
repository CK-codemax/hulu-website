export default function FooterCols({list}) {
  return (
    <ul className="flex flex-col pt-2 space-y-2">
        {list?.map((listItem) => <li className="cursor-pointer text-[14px] capitalize text-wrap text-gray-700" key={listItem}>{listItem}</li>)}
    </ul>
  )
}

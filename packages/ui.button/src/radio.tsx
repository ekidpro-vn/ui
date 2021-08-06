import {
  createContext,
  DetailedHTMLProps,
  Dispatch,
  FC,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useContext,
  useState
} from 'react';

// const RadioStyled = styled(typeof HTMLDivElement)`
//   input[type='radio'] + label span {
//     transition: background 0.2s, transform 0.2s;
//   }

//   input[type='radio'] + label span:hover,
//   input[type='radio'] + label:hover span {
//     transform: scale(1.2);
//   }

//   input[type='radio']:checked + label span {
//     background-color: #3490dc; //bg-blue
//     box-shadow: 0px 0px 0px 2px white inset;
//   }

//   input[type='radio']:checked + label {
//     color: #3490dc; //text-blue
//   }
// `;

const RadioGroupContext = createContext<string | null>(null);
const RadioGroupUpdateContext = createContext<Dispatch<SetStateAction<string | null>> | null>(null);

export const RadioGroup: FC = ({ children }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <RadioGroupUpdateContext.Provider value={setSelected}>
      <RadioGroupContext.Provider value={selected}>{children}</RadioGroupContext.Provider>
    </RadioGroupUpdateContext.Provider>
  );
};

type RadioProps = {
  title?: string;
};

export const Radio = forwardRef<
  HTMLDivElement,
  RadioProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  const { title, className, ...rest } = props;
  const selected = useContext(RadioGroupContext);
  const isSelected = selected === props.id;
  const update = useContext(RadioGroupUpdateContext);

  let spanClassName = 'w-5 h-5 mr-2 inline-block rounded-full border border-grey flex-no-shrink transition ';
  if (isSelected) {
    spanClassName += 'bg-blue-500';
  } else {
    spanClassName += 'bg-white';
  }

  return (
    <div ref={ref} className={`flex items-center ${className}`} {...rest}>
      <input id="ekp-radio" type="radio" className="hidden" />
      <label
        htmlFor="ekp-radio"
        className="flex items-center cursor-pointer"
        onClick={() => {
          if (update) {
            if (isSelected) {
              update(null);
            } else {
              update(props.id ?? null);
            }
          }
        }}
      >
        <span className={spanClassName} style={{ boxShadow: '0px 0px 0px 2px white inset' }} />
        {title}
      </label>
    </div>
  );
});

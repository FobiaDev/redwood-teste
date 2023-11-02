import { forwardRef, ForwardRefRenderFunction } from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  InputProps as InputChakraProps,
} from '@chakra-ui/react'
import CurrencyInputMask from 'react-currency-masked-input'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface InputProps extends InputChakraProps {
  name: string
  label?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        name={name}
        id={name}
        as={CurrencyInputMask}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{String(error.message)}</FormErrorMessage>}
    </FormControl>
  )
}

const CurrencyInput = forwardRef(InputBase)

export default CurrencyInput

import * as React from 'react';
import {Mail, Clock, ChevronLeft, ChevronRight} from 'lucide-react';
import {usePagination} from 'react-use-pagination';
import toast from 'react-simple-toasts';
import {twMerge} from 'tailwind-merge';
import TextArea from 'react-textarea-autosize';
import {format} from 'date-fns';
import useFetchWish from '../hooks/useFetchWish';
import useSubmitWish from '../hooks/useSubmitWish';
import {Wish, WishForm, WishFormSchema} from '../schema';

import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/failure.css';
import Skeleton from 'react-loading-skeleton';

const WishCard = (props: Wish) => {
  return (
    <div className="flex flex-col font-poppins px-3 py-3 [&>*:not(:last-child)]:mb-2 animate-fade-left">
      <div>
        <span className="text-[#7b6945] font-bold">{props.name}</span>
      </div>
      <div className="flex items-center">
        <Clock width={12} height={12} stroke="#99a1af" />{' '}
        <span className="text-xs ml-2 text-gray-400">
          {format(new Date(props.createdAt), 'cccc, do MMM yyyy - HH:mm aaaa')}
        </span>
      </div>
      <div>
        <p className="text-sm">{props.wish}</p>
      </div>
    </div>
  );
};

const WishWidget = () => {
  const [name, setName] = React.useState<string>('');
  const [wish, setWish] = React.useState<string>('');
  const [error, setError] = React.useState<undefined | WishForm>({
    name: '',
    wish: '',
  });
  const [data, loading] = useFetchWish({skip: false});

  const [submitWish, loadingSubmit] = useSubmitWish();

  console.log('error: ', error);

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({
    totalItems: data?.length || 0,
    initialPageSize: 6,
    initialPage: 0,
  });

  const onSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const parsed = WishFormSchema.safeParse({name, wish});
      if (parsed.success) {
        submitWish(parsed.data.name, parsed.data.wish)
          .then(() => {
            toast('Pesan terkirim!', {theme: 'success'});
            setName('');
            setWish('');
            setError({name: '', wish: ''});
          })
          .catch(() => toast('Gagal Mengirim Pesan!', {theme: 'failure'}));
      } else {
        setError({
          name: parsed.error.format().name?._errors[0] || '',
          wish: parsed.error.format().wish?._errors[0] || '',
        });
        toast('Gagal Mengirim Pesan!', {theme: 'failure'});
      }
    },
    [name, wish, submitWish]
  );

  return (
    <div className="bg-[#F2EEE8] w-full rounded-2xl">
      {/* Header */}
      <div className="flex items-center border-b-[#7b6945] border-b-[1px] p-4">
        <Mail width={16} height={16} stroke="#7b6945" />
        <span className="ml-2 text-sm text-[#7b6945] font-cormorant">
          {data?.length || 0} Ucapan
        </span>
      </div>
      {/* Wish Editor */}
      <form
        onSubmit={onSubmit}
        className="border-b-[#7b6945] border-b-[1px] p-4 [&>*:not(:last-child)]:mb-5"
      >
        <div>
          <label htmlFor="name">
            <span className="font-poppins text-sm">Nama anda:</span>
          </label>
          <input
            id="name"
            placeholder="Nama Anda"
            className={twMerge(
              'bg-white w-full p-2 rounded-xl mt-2',
              error?.name && 'border-red-600 border-1',
              loadingSubmit && 'bg-gray-200 text-gray-300 cursor-not-allowed'
            )}
            maxLength={60}
            required
            value={name}
            disabled={loadingSubmit}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => {
              setError((error) => error && {...error, name: ''});
            }}
          />
          <div className="flex items-center px-2 mt-1">
            <div className="flex-1">
              {error?.name && (
                <span className="text-xs text-red-600">{error?.name}</span>
              )}
            </div>
            <span className="text-xs text-[#99a1af]">{name.length} / 60</span>
          </div>
        </div>
        <div>
          <label htmlFor="name">
            <span className="font-poppins text-sm">Ucapan & Doa:</span>
          </label>
          <TextArea
            id="wish"
            className={twMerge(
              'bg-white w-full p-2 rounded-xl mt-2 resize-none',
              error?.wish && 'border-red-600 border-1',
              loadingSubmit && 'bg-gray-200 text-gray-300 cursor-not-allowed'
            )}
            disabled={loadingSubmit}
            minRows={3}
            placeholder="Ucapan & Doa"
            maxLength={300}
            required
            value={wish}
            onChange={(event) => setWish(event.target.value)}
            onBlur={() => {
              setError((error) => error && {...error, wish: ''});
            }}
          />
          <div className="flex items-center px-2 ">
            <div className="flex-1">
              {error?.wish && (
                <span className="text-xs text-red-600">{error?.wish}</span>
              )}
            </div>
            <span className="text-xs text-[#99a1af]">{wish.length} / 300</span>
          </div>
        </div>
        <button
          type="submit"
          disabled={loadingSubmit}
          className={twMerge(
            'bg-[#7b6945] py-2 px-5 rounded text-white font-bold cursor-pointer',
            loadingSubmit && 'cursor-not-allowed'
          )}
        >
          {loadingSubmit ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>
      {/* Content List */}
      <div
        className={twMerge(
          'min-h-[300px] [&>*:not(:last-child)]:border-b-[#7b6945] [&>*:not(:last-child)]:border-b-[1px]',
          !loading && !data?.length && 'flex justify-center items-center'
        )}
      >
        {loading ? (
          <div>
            {[...Array(5).keys()].map((_, index) => {
              return (
                <div key={index} className="p-2">
                  <Skeleton height={100} baseColor="#dadada" />
                </div>
              );
            })}
          </div>
        ) : data?.length ? (
          // bug start index and end index not accurad
          data
            ?.slice(
              startIndex === 0 ? startIndex : startIndex - 1,
              nextEnabled ? endIndex : undefined
            )
            .map((wish, index) => {
              return (
                <WishCard key={`wish-${index}-${wish.createdAt}`} {...wish} />
              );
            })
        ) : (
          <span className="ml-2 text-sm text-[#7b6945] font-cormorant">
            Belum ada ucapan
          </span>
        )}
      </div>
      {/* Pagnation */}
      <div className="flex flex-row p-4 text-[#7b6945] text-sm border-t-[#7b6945] border-t-[1px]">
        <button
          className="flex items-center cursor-pointer"
          onClick={setPreviousPage}
          disabled={!previousEnabled}
        >
          <ChevronLeft />
          <span>Previous</span>
        </button>
        <span className="flex flex-1 justify-center ">
          Page: {totalPages > 0 ? currentPage + 1 : 0} of {totalPages}
        </span>
        <button
          className="flex items-center cursor-pointer"
          onClick={setNextPage}
          disabled={!nextEnabled}
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default WishWidget;

import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QuickActions from '../components/QuickActions';
import Back from '../components/Back';
import ChooseHeader from '../components/tickets/ChooseHeader';
import CreateTicketModal, {
  CreateMode as ModalCreateMode,
} from '../components/tickets/CreateTicketModal';
import BasketTable from '../components/tickets/BasketTable';
import EventDescriptionCard from '../components/tickets/EventDescriptionCard';
import StickyBottomBar from '../components/tickets/StickyBottomBar';
import DetailsForm, { TicketDetails } from '../components/tickets/DetailsForm';
import PaymentForm, { PaymentDetails } from '../components/tickets/PaymentForm';
import { ticketEvents, TicketEvent } from '../data';
import SubHeaderHeading from '../components/SubHeading';

type Step = 'list' | 'choose' | 'details' | 'payment' | 'done';
type CreateMode = null | ModalCreateMode;

type BasketItem = { id: string; label: string; qty: number; price: number };

const TicketsScreen = () => {
  const [step, setStep] = useState<Step>('list');
  const [selectedEvent, setSelectedEvent] = useState<TicketEvent | null>(null);
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [createMode, setCreateMode] = useState<CreateMode>(null);
  const [descOpen, setDescOpen] = useState(false);
  const total = useMemo(
    () => basket.reduce((s, b) => s + b.qty * b.price, 0),
    [basket],
  );

  const [details, setDetails] = useState<TicketDetails[]>([
    { firstName: '', lastName: '', email: '', contactNumber: '' },
    { firstName: '', lastName: '', email: '', contactNumber: '' },
  ]);
  const [sameForAll, setSameForAll] = useState(false);
  const [payment, setPayment] = useState<PaymentDetails>({
    cardNumber: '',
    cardName: '',
    expDate: '',
    cvv: '',
  });

  const toChoose = (evt: TicketEvent) => {
    setSelectedEvent(evt);
    setStep('choose');
  };

  const addItem = (label: string, price: number) => {
    setBasket(prev => {
      const i = prev.findIndex(x => x.label === label);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 };
        return copy;
      }
      return [...prev, { id: `${Date.now()}`, label, qty: 1, price }];
    });
  };

  const commitCreate = () => {
    if (!createMode) return;
    const label =
      createMode.kind === 'adult' ? 'Adult ticket' : 'Children ticket';
    const price = createMode.kind === 'adult' ? 30 : 10;
    const daysCount = Math.max(1, createMode.selectedDayIds.size);
    setBasket(prev => [
      ...prev,
      { id: `${Date.now()}`, label, qty: daysCount, price },
    ]);
    setCreateMode(null);
  };

  const removeItem = (label: string) =>
    setBasket(prev => prev.filter(x => x.label !== label));

  const HeaderBar = ({
    title,
    stepText,
  }: {
    title: string;
    stepText?: string;
  }) => (
    <View style={styles.headerBar}>
      <View style={{ flex: 1 }}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {stepText ? <Text style={styles.stepRight}>{stepText}</Text> : null}
    </View>
  );

  const renderList = () => (
    <View style={{ flex: 1 }}>
      <QuickActions />
      <SubHeaderHeading title="Tickets" filter={false} />
      <FlatList
        data={ticketEvents}
        keyExtractor={i => i.id}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text style={styles.eventMeta}>{item.date}</Text>
              <Text style={styles.eventVenue}>{item.venue}</Text>
            </View>
            <TouchableOpacity
              style={styles.buyBtn}
              onPress={() => toChoose(item)}
            >
              <Text style={styles.buyText}>Buy Tickets</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );

  const renderChoose = () => (
    <View style={{ flex: 1 }}>
      <Back
        onPress={() => {
          if (step === 'list') return;
          if (step === 'choose' && createMode) {
            setCreateMode(null);
            return;
          }
          setStep('list');
        }}
      />
      <View style={styles.eventStrip}>
        <Text style={styles.eventStripText}>
          {selectedEvent?.name ?? 'Name of the event Goes here'}
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 220 }}>
        <ChooseHeader stepText="Step 1/4" />
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.redBtn}
            onPress={() =>
              setCreateMode({
                kind: 'adult',
                qty: 1,
                selectedDayIds: new Set(),
              })
            }
          >
            <Text style={styles.redBtnText}>Create Adult Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.redBtn}
            onPress={() =>
              setCreateMode({
                kind: 'child',
                qty: 1,
                selectedDayIds: new Set(),
              })
            }
          >
            <Text style={styles.redBtnText}>Create Children Ticket</Text>
          </TouchableOpacity>
        </View>

        <CreateTicketModal
          visible={!!createMode}
          event={selectedEvent}
          mode={createMode}
          setMode={setCreateMode}
          onCommit={commitCreate}
        />

        <BasketTable items={basket} onRemove={removeItem} />

        {/* <View style={styles.footerRow}> */}
        {/* <View>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View> */}
        {/* <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => setStep('details')}
          > */}
        {/* <Text style={styles.primaryBtnText}>Next</Text>
          </TouchableOpacity> */}
        {/* </View> */}
      </ScrollView>

      <StickyBottomBar
        label="Description / Name of the event"
        totalLabel="Total"
        totalValue={`$${total.toFixed(2)}`}
        nextDisabled={basket.length === 0}
        onNext={() => setStep('details')}
        expanded={descOpen}
        onToggle={() => setDescOpen(prev => !prev)}
      >
        <EventDescriptionCard
          title="Name Of The Event"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </StickyBottomBar>
    </View>
  );

  const renderDetails = () => (
    <View style={{ flex: 1 }}>
      <Back onPress={() => setStep('choose')} />
      <HeaderBar title={selectedEvent?.name ?? ''} stepText="Step 2/4" />
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 120 }}>
        <Text style={styles.sectionTitle}>Add details</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: '#444' }}>
            Use same details for all tickets
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSameForAll(prev => !prev);
              setDetails(prev => prev.map(() => prev[0]));
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#9ca3af',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {sameForAll ? (
              <Icon name="check" size={14} color="#ef4444" />
            ) : null}
          </TouchableOpacity>
        </View>
        {details.map((d, idx) => (
          <DetailsForm
            key={idx}
            title={`Adult ticket #${idx + 1}`}
            dayLabels={[
              'Day 1 01 Jan',
              'Day 2 01 Jan',
              'Day 3 01 Jan',
              'Day 4 01 Jan',
            ]}
            value={d}
            onChange={next =>
              setDetails(prev => {
                const copy = [...prev];
                copy[idx] = next;
                if (sameForAll) return copy.map(() => next);
                return copy;
              })
            }
          />
        ))}
      </ScrollView>
      <StickyBottomBar
        label=""
        totalLabel="Total"
        totalValue={`$${total.toFixed(2)}`}
        onNext={() => setStep('payment')}
        hideToggle
      />
    </View>
  );

  const renderPayment = () => (
    <View style={{ flex: 1 }}>
      <Back onPress={() => setStep('details')} />
      <HeaderBar title={selectedEvent?.name ?? ''} stepText="Step 3/4" />
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 120 }}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <PaymentForm value={payment} onChange={setPayment} />
      </ScrollView>
      <StickyBottomBar
        label=""
        totalLabel="Total"
        totalValue={`$${total.toFixed(2)}`}
        nextLabel="Check out"
        onNext={() => setStep('done')}
        hideToggle
      />
    </View>
  );

  const renderDone = () => (
    <View style={{ flex: 1 }}>
      <Back onPress={() => setStep('payment')} />
      <HeaderBar title={selectedEvent?.name ?? ''} stepText="Step 4/4" />
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 120 }}>
        <Text style={styles.sectionTitle}>Tickets purchased!</Text>
        <Text style={styles.descText}>
          Your tickets have been successfully purchased. You can download here
          or find them in your email.
        </Text>
      </ScrollView>
      <StickyBottomBar
        label=""
        totalLabel=""
        totalValue={''}
        nextLabel="Download tickets"
        onNext={() => {}}
        hideToggle
        fullWidthButton
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {step === 'list' && renderList()}
      {step === 'choose' && renderChoose()}
      {step === 'details' && renderDetails()}
      {step === 'payment' && renderPayment()}
      {step === 'done' && renderDone()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  eventStrip: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  eventStripText: { color: '#fff', fontSize: 12 },
  headerTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  headerSub: { fontSize: 11, color: '#777', marginTop: 2 },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  eventName: { fontSize: 14, fontWeight: '700', color: '#111' },
  eventMeta: { fontSize: 11, color: '#666', marginTop: 4 },
  eventVenue: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
    fontStyle: 'italic',
  },
  buyBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buyText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  tabRow: { flexDirection: 'row', gap: 8 },
  chooseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  chooseHeaderTitle: { fontSize: 14, fontWeight: '800', color: '#111' },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 10,
  },
  smallBtn: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  smallBtnText: { fontSize: 11, color: '#111', fontWeight: '700' },
  redBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  redBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 12,
  },
  createCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  createTitle: { fontSize: 16, fontWeight: '800', color: '#111' },
  createSub: { fontSize: 10, color: '#ef4444', marginTop: 2 },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 10,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  qtyVal: { fontSize: 16, fontWeight: '800', color: '#111' },
  daysLabel: { fontSize: 12, color: '#444', marginTop: 12 },
  daysPrice: { fontSize: 10, color: '#ef4444', marginTop: 2 },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 6,
  },
  dayRowSelected: { backgroundColor: '#B91C1C' },
  dayLabel: { fontSize: 12, color: '#111', fontWeight: '800' },
  dayLabelSelected: { color: '#fff' },
  dayDate: { fontSize: 11, color: '#666' },
  dayDateSelected: { color: '#fff' },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  tableHeaderText: { fontSize: 11, color: '#666', fontWeight: '700' },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  cell: { fontSize: 12, color: '#444' },
  cellStrong: { fontSize: 12, color: '#111', fontWeight: '700' },
  cellNote: { fontSize: 11, color: '#666' },
  descBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  descTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111',
    marginBottom: 6,
  },
  descText: { fontSize: 12, color: '#555', lineHeight: 18 },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  totalLabel: { fontSize: 10, color: '#666' },
  totalValue: { fontSize: 16, color: '#ef4444', fontWeight: '900' },
  primaryBtn: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  inputMock: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  inputPlaceholder: { fontSize: 12, color: '#9ca3af' },
  formCard: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 12,
    color: '#444',
    marginBottom: 6,
    fontWeight: '700',
  },
  stepRight: { fontSize: 11, color: '#777' },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: 12,
  },
  stickyBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 12,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  descToggle: { fontSize: 12, color: '#333' },
});

export default TicketsScreen;
